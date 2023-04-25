import { NextPageWithAuth } from "../consultancies"
import timeGridPlugin from "@fullcalendar/timegrid"
import FullCalendar from "@fullcalendar/react"
import { useEffect, useState } from "react"
import { InferGetServerSidePropsType } from "next/types"
import { getServerSideProps } from "../../consultancies"
import interactionPlugin from "@fullcalendar/interaction"
import styles from "../styles/Home.module.css"
import {
  EventApi,
  EventInput,
  DateSelectArg,
  EventClickArg,
  EventContentArg,
  EventSourceInput,
  EventChangeArg,
  formatDate,
} from "@fullcalendar/core"
import { Button, Container, Modal, Text } from "@nextui-org/react"
import {
  Availability,
  AvailabilityDataType,
  useCreateAvailabilityMutation,
  useDeleteAvailabilityMutation,
  useGetMyAvailabilitiesQuery,
  useUpdateAvailabilityMutation,
} from "../../../generated/graphql-frontend"
import { useIsReservedValidator } from "../../../Validators/IsReservedvalidator"
import { NullableAvailability } from "../../consultancies/[slug]/[...id]"
import DatePicker, { DateObject } from "react-multi-date-picker"
type CalendarEventstate = Availability[] | any[]
type TodayEvents =
  | Pick<Availability, "start" | "end" | "is_reserved">
  | null
  | undefined
const Availability: NextPageWithAuth = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  let todayStr = new Date().toISOString().replace(/T.*$/, "")
  const [serverErrors, setServerErrors] = useState<string[]>([])
  const [id, setId] = useState<number>(0)
  const [isReserved, setIsReserved] = useState<boolean>(false)
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
  const [selectedDates, setSelectedDates] = useState<
    DateObject | DateObject[] | null
  >([])

  //use today evenets to duplicate tem across new dates
  const [todayEvents, setTodayEvents] = useState<TodayEvents[] | undefined>([])
  const { errors: IsRservedErrors, helper: isReservedHelper } =
    useIsReservedValidator(isReserved)
  const [createAvailability, { loading, error }] =
    useCreateAvailabilityMutation({
      onCompleted: (data) => {},
      onError: (err) => {
        setServerErrors(err.graphQLErrors[0].extensions as unknown as string[])
      },
    })
  const handelDuplicateEvents = () => {
    setIsModalVisible(true)
  }
  const closeModalHandler = () => {
    setIsModalVisible(false)
  }
  const getTransformedEventObject = (date: DateObject) => {
    const jsDateStart = new Date(date.format("YYYY/MM/DD"))
    const jsDateEnd = new Date(date.format("YYYY/MM/DD"))
    console.log(jsDateEnd, 777)

    const events = todayEvents?.map((event: TodayEvents) => {
      const start = event?.start
      const end = event?.end
      if (start && end) {
        const startDateObject = new Date(start)
        const startHours = startDateObject.getHours()
        const startMinutes = startDateObject.getMinutes()
        jsDateStart.setHours(startHours)
        jsDateStart.setMinutes(startMinutes)
        const startDate = jsDateStart.toISOString().slice(0, 19)
        const endDateObject = new Date(end)
        const endHours = endDateObject.getHours()
        const endMinutes = endDateObject.getMinutes()

        jsDateEnd.setHours(endHours)
        jsDateEnd.setMinutes(endMinutes)

        
        const endDate = jsDateEnd.toISOString().slice(0, 19)
        const date = new Date()
        const timezoneOffsetInMinutes = date.getTimezoneOffset()
        const hoursOffset = Math.abs(Math.floor(timezoneOffsetInMinutes / 60))
        const minutesOffset = Math.abs(timezoneOffsetInMinutes % 60)
        const formattedOffset = `${
          timezoneOffsetInMinutes < 0 ? "+" : "-"
        }${hoursOffset.toString().padStart(2, "0")}:${minutesOffset
          .toString()
          .padStart(2, "0")}`
        console.log(formattedOffset)
        return {
          start: startDate + formattedOffset,
          end: endDate + formattedOffset,
          is_reserved: event.is_reserved,
        }
      }
    })

    if (events) {
      const filteredNonEmpty = events.filter(
        (n) => n !== undefined
      ) as AvailabilityDataType[]
      return filteredNonEmpty
    }
    ;[]
  }
  const setDuplicateHandler = () => {
    if (selectedDates) {
      let eventsForUpdate: AvailabilityDataType[] = []
      if (Array.isArray(selectedDates)) {
        selectedDates.map((date) => {
          let eventArray = [...(getTransformedEventObject(date) || [])]
          if (eventArray) {
            eventsForUpdate = [...eventsForUpdate, ...eventArray]
          }
        })
      } else if (selectedDates) {
        eventsForUpdate = [...(getTransformedEventObject(selectedDates) || [])]
      }
      createAvailability({ variables: { data: eventsForUpdate } })
        .then((response: any) => {
          refetch({})
        })
        .catch((err: any) => {})
    }
    setIsModalVisible(false)
  }
  const { data, refetch } = useGetMyAvailabilitiesQuery()
  useEffect(() => {
    const todaysEventData =
      data &&
      data.getMyAvailabilities?.map((item: NullableAvailability) => {
        let dateString = item?.start
        if (dateString && item?.start && item?.end) {
          let date = new Date(dateString)
          let today = new Date()

          if (
            date.getFullYear() === today.getFullYear() &&
            date.getMonth() === today.getMonth() &&
            date.getDate() === today.getDate()
          ) {
            return { start: item?.start, end: item?.end, is_reserved: false }
          }
        }
        return null
      })
    const todaysEventDataFiltered = todaysEventData?.filter((item) => {
      return !!item
    })
    setTodayEvents(todaysEventDataFiltered)
  }, [data])
  const [updateAvailability] = useUpdateAvailabilityMutation({
    onCompleted: (data) => {},
    onError: (err) => {
      setServerErrors(err.graphQLErrors[0].extensions as unknown as string[])
    },
  })

  const [deleteAvailability] = useDeleteAvailabilityMutation({
    onCompleted: (data) => {},
    onError: (err) => {
      setServerErrors(err.graphQLErrors[0].extensions as unknown as string[])
    },
  })
  const defaultEvents: CalendarEventstate = []
  const [events, setEvents] = useState<CalendarEventstate>(defaultEvents)
  console.log(events, 6666)
  const handleDateSelect = (selectInfo: DateSelectArg) => {
    let calendarApi = selectInfo.view.calendar

    // calendarApi.unselect() // clear date selection
    const values = {
      is_reserved: false,
      start: selectInfo.startStr,
      end: selectInfo.endStr,
    }
    setIsReserved(false)

    createAvailability({ variables: { data: [values] } })
      .then((response: any) => {
        refetch({})
      })
      .catch((err: any) => {})
  }
  useEffect(() => {
    if (data?.getMyAvailabilities) {
      setEvents([...data?.getMyAvailabilities])
      //fetch availability from database and shoud fetch to false
    }
  }, [data?.getMyAvailabilities])
  const handleEventClick = (clickInfo: EventClickArg) => {
    deleteAvailability({ variables: { id: clickInfo.event.id } })
      .then((response: any) => {
        refetch({})
      })
      .catch((err: any) => {})
  }
  const eventChange = (args: EventChangeArg) => {
    if (args.event.start && args.event.end && args.event.id) {
      console.log(args.event.end, 333)
      updateAvailability({
        variables: {
          id: args.event.id,
          is_reserved: false,
          start: args.event.startStr,
          end: args.event.endStr,
        },
      })
        .then((response: any) => {
          // console.log(response, 111)
          refetch({})
        })
        .catch((err: any) => {
          // console.log(err, 222)
        })
    }
  }

  const renderEventContent = (eventInfo: EventContentArg) => {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
        <i>Drag bottom and up to extend</i>
      </>
    )
  }
  return (
    <div className="demo-app">
      <div className="demo-app-main">
        <Container css={{ mw: 960, mt: 50 }}>
          {IsRservedErrors && <Text>{IsRservedErrors}</Text>}
          <FullCalendar
            plugins={[timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "",
            }}
            eventBackgroundColor="var(--nextui-colors-secondary)"
            eventBorderColor="#fff"
            selectOverlap={false}
            // Check if the selected time range overlaps with any events
            slotDuration="00:15"
            initialView="timeGridDay"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={true}
            events={events} // alternatively, use the `events` setting to fetch from a feed
            select={handleDateSelect}
            eventContent={renderEventContent} // custom render function
            eventClick={handleEventClick}
            eventChange={eventChange}
          />
          <Text css={{ mt: 20 }} id="modal-title" size={18}>
            Duplicate todays events to following dates
          </Text>

          <DatePicker
            style={{
              height: "34px",
              fontSize: "14px",
              padding: "10px 12px",
              borderRadius: "12px",
              width: "100%",
            }}
            containerStyle={{
              width: "100%",
            }}
            multiple
            value={selectedDates}
            onChange={(dates) => setSelectedDates(dates)}
          />
          <div style={{ display: "flex" }}>
            <Button
              css={{ mt: 20 }}
              auto
              flat
              color="secondary"
              onPress={setDuplicateHandler}
            >
              Duplicate
            </Button>
            <Button
              css={{ mt: 20, ml: 10 }}
              auto
              flat
              color="secondary"
              onPress={() => {
                setSelectedDates([])
              }}
            >
              Clear
            </Button>
          </div>
        </Container>
      </div>
    </div>
  )
}
Availability.auth = {
  role: "USER",
}
export default Availability
