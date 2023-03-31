import { NextPageWithAuth } from "../consultancies"
import timeGridPlugin from "@fullcalendar/timegrid"
import FullCalendar from "@fullcalendar/react"
import { useEffect, useState } from "react"
import { InferGetServerSidePropsType } from "next/types"
import { getServerSideProps } from "../../consultancies"
import interactionPlugin from "@fullcalendar/interaction"
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
import { Button, Container, Text } from "@nextui-org/react"
import {
  Availability,
  useCreateAvailabilityMutation,
  useDeleteAvailabilityMutation,
  useGetMyAvailabilitiesQuery,
  useUpdateAvailabilityMutation,
} from "../../../generated/graphql-frontend"
import { useIsReservedValidator } from "../../../Validators/IsReservedvalidator"

type CalendarEventstate = Availability[] | any[]

const Availability: NextPageWithAuth = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  let todayStr = new Date().toISOString().replace(/T.*$/, "")
  const [serverErrors, setServerErrors] = useState<string[]>([])
  const [id, setId] = useState<number>(0)
  const [isReserved, setIsReserved] = useState<boolean>(false)
  const { errors: IsRservedErrors, helper: isReservedHelper } =
    useIsReservedValidator(isReserved)
  const [createAvailability, { loading, error }] =
    useCreateAvailabilityMutation({
      onCompleted: (data) => {},
      onError: (err) => {
        setServerErrors(err.graphQLErrors[0].extensions as unknown as string[])
      },
    })
  const { data, refetch } = useGetMyAvailabilitiesQuery()

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


  const handleDateSelect = (selectInfo: DateSelectArg) => {
    let calendarApi = selectInfo.view.calendar

    // calendarApi.unselect() // clear date selection
    const values = {
      is_reserved: false,
      start: selectInfo.startStr,
      end: selectInfo.endStr,
    }
    setIsReserved(false)

    createAvailability({ variables: { ...values } })
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
            eventBackgroundColor= 'var(--nextui-colors-secondary)'
            eventBorderColor= '#fff'
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
        </Container>
      </div>
    </div>
  )
}
Availability.auth = {
  role: "USER",
}
export default Availability
