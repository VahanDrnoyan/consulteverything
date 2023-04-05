import { useRouter } from "next/router"
import { GetServerSideProps, NextPage } from "next/types"
import { InferGetServerSidePropsType } from "next"
import interactionPlugin from "@fullcalendar/interaction"
import timeGridPlugin from "@fullcalendar/timegrid"
import moment from "moment"
import { ChangeEvent, useEffect, useState } from "react"

import { GetConsultancyById } from "../../../Consultancy/nexus_types"
import {
  Button,
  Container,
  Input,
  Textarea,
  Text,
  Checkbox,
  Radio,
  FormElement,
  Badge,
  Modal,
} from "@nextui-org/react"
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

import {
  Availability,
  ConsultancyDataType,
  Field,
  GetConsultancyByIdDocument,
  GetConsultancyByIdQuery,
  GetConsultancyByIdQueryVariables,
  GetMyConsultanciesDocument,
  TagInputType,
  useGetConsultancyByIdQuery,
  useGetMyAvailabilitiesQuery,
} from "../../../generated/graphql-frontend"
import { initializeApollo } from "../../../lib/client"
import Editor from "../../../components/Editor"
import FullCalendar from "@fullcalendar/react"

type NextPageWithAuth = NextPage & {
  auth?: {
    role: string
  }
}
export type NullableAvailability = Pick<Availability, "id" | "start" | "end"> | null

type AvailabilityDisplayOnly = NullableAvailability & { rendering: String }
type CalendarEventstate = AvailabilityDisplayOnly[] | any[]
const defaultEvents: CalendarEventstate[] = []

const ConsultancyView: NextPageWithAuth = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const router = useRouter()
  const { slug, id } = router.query
  const [events, setEvents] = useState<CalendarEventstate>(defaultEvents)

  const { loading, error, data } = useGetConsultancyByIdQuery({
    variables: {
      id: parseInt(id && typeof id[0] === "string" ? id[0] : ""),
      isActive: true,
    },
  })
  const { data: eventData, refetch } = useGetMyAvailabilitiesQuery()
  const [visible, setVisible] = useState(false)
  const [duration, setDuration] = useState("")

  const [sheduledStart, setSheduledStart] = useState("")
  const [sheduledEnd, setSheduledEnd] = useState("")

  const [scheduledAt, setScheduledAt] = useState("")

  const handler = () => setVisible(true)

  const closeHandler = () => {
    setVisible(false)
  }
  const [age, setAge] = useState(0)
  const [files, setFiles] = useState<any[]>([])
  useEffect(() => {
    if (eventData?.getMyAvailabilities) {
      const forDisplayOnly = eventData?.getMyAvailabilities.map(
        (item: NullableAvailability) => {
          return { ...item, rendering: "background" }
        }
      )
      setEvents([...forDisplayOnly])
      //fetch availability from database and shoud fetch to false
    }
  }, [eventData?.getMyAvailabilities])

  const handleFilesChange = (e: any) => {
    const fileList = Array.from(e.target.files)
    setFiles(fileList)
  }
  const handleAgeChange = (e: ChangeEvent<FormElement>) => {
    const inputAge = parseInt(e.target.value)
    if (inputAge >= 0 && inputAge <= 120) {
      setAge(inputAge)
    }
  }
  const setEditorValue = () => {}
  const handleAllowVideo = () => {}
  const handleEmailChange = () => {}
  const handleExpertiseChange = () => {}
  const handleGenderChange = () => {}
  const handleNameChange = () => {}
  const handleOngoingSupport = () => {}
  const handleProfessionChange = () => {}
  const setEditorExprienceValue = () => {}
  const setEditorExpectationsValue = () => {}
  const handleTimeSpentChange = () => {}
  const handleDurationChange = (e: ChangeEvent<FormElement>) => {
    const endDateString: string = sheduledEnd
    const startDateString: string = sheduledStart
    let endDateObj = moment(endDateString)
    let startDateObj = moment(startDateString)
    startDateObj.add(e.target.value, "minutes")
    let diff = startDateObj.diff(endDateObj);
    if(diff <= 0){
      setDuration(e.target.value)

    }
  }
  const clearSchedule = ()=>{
    setScheduledAt('')
    setDuration(0)
  }
  const setScheduleHandler = () => {
    const dateString: string = sheduledStart

    // convert date string to moment object
    let dateObj = moment(dateString)

    // add 30 minutes to the moment object
    dateObj.add(duration, "minutes")

    // convert moment object back to date string in the desired format
    let newDateString = dateObj.format("YYYY-MM-DDTHH:mm:ssZ")
    setScheduledAt(newDateString)
    setVisible(false)
  }
  const handleEventClick = (clickInfo: EventClickArg) => {
    setVisible(true)
    setSheduledStart(clickInfo.event.startStr)
    setSheduledEnd(clickInfo.event.endStr)
    console.log(clickInfo.event.id)
  }
  if (error) {
    return (
      <div>
        <Container css={{ mw: 960, p: 12 }}>
          <Text h2>
            {error?.graphQLErrors[0].extensions.originalError.message}
          </Text>
        </Container>
      </div>
    )
  }
  console.log(data && data.getConsultancyById?.data, 222)
  return (
    <div>
      <Container css={{ mw: 960, p: 12 }}>
        <Text h2>
          Request Consultancy:{" "}
          {!loading && data && data.getConsultancyById?.data.title}
        </Text>
        <Text h4>
          {data && data.getConsultancyById?.data.short_description}
        </Text>
        <div
          dangerouslySetInnerHTML={{
            __html:
              (data && data.getConsultancyById?.data.long_description) || "",
          }}
        ></div>
        <div style={{ marginTop: "12px" }}>
          {data &&
            data.getConsultancyById?.data?.tags?.map((tag: TagInputType) => {
              return (
                <Badge
                  key={tag.id}
                  css={{
                    bg: "$accents4",
                    color: "$accents8",
                    border: "none",
                    mr: 4,
                    mt: 4,
                  }}
                >
                  {tag.name}
                </Badge>
              )
            })}
        </div>
        {data && data.getConsultancyById?.data?.allow_name_surname && (
          <div>
            <Input
              bordered
              labelPlaceholder="Name & Surname"
              onChange={handleNameChange}
              color="default"
              type="text"
              css={{ mt: 40, w: "100%" }}
            />
          </div>
        )}

        {data && data.getConsultancyById?.data?.allow_age_check && (
          <div>
            <Input
              bordered
              labelPlaceholder="Age"
              onChange={handleAgeChange}
              color="default"
              type="email"
              css={{ mt: 40, w: "100%" }}
            />
          </div>
        )}
        {data && data.getConsultancyById?.data?.allow_email_check && (
          <div>
            <Input
              bordered
              labelPlaceholder="Email"
              onChange={handleEmailChange}
              color="default"
              type="email"
              css={{ mt: 40, w: "100%" }}
            />
          </div>
        )}
        {data &&
          data.getConsultancyById?.data
            ?.allow_expertise_in_problem_field_check && (
            <div>
              <Input
                bordered
                labelPlaceholder="My expertise"
                onChange={handleExpertiseChange}
                color="default"
                type="text"
                css={{ mt: 40, w: "100%" }}
              />
            </div>
          )}
        {data && data.getConsultancyById?.data?.allow_profession_check && (
          <div>
            <Input
              bordered
              labelPlaceholder="My proffession"
              onChange={handleProfessionChange}
              color="default"
              type="text"
              css={{ mt: 40, w: "100%" }}
            />
          </div>
        )}
        {data &&
          data.getConsultancyById?.data
            ?.allow_time_spent_issue_resolution_check && (
            <div>
              <Input
                bordered
                labelPlaceholder="How much time I spent on issue?"
                onChange={handleTimeSpentChange}
                color="default"
                type="text"
                css={{ mt: 40, w: "100%" }}
              />
            </div>
          )}

        {data && data.getConsultancyById?.data?.allow_expectations_check && (
          <div style={{ marginTop: "20px" }}>
            <Editor
              bgColor="rgb(241, 243, 245)"
              value={""}
              placeholder="My expecpectations"
              setValue={setEditorExpectationsValue}
            />
          </div>
        )}
        {data &&
          data.getConsultancyById?.data
            ?.allow_previous_consultancy_experience_check && (
            <div style={{ marginTop: "20px" }}>
              <Editor
                bgColor="rgb(241, 243, 245)"
                value={""}
                placeholder="Previuous consultancy experience"
                setValue={setEditorExprienceValue}
              />
            </div>
          )}
        {data?.getConsultancyById?.data?.max_attachment_count != 0 && (
          <div style={{ marginTop: "20px" }}>
            <label htmlFor="file-upload">Select Files:</label>
            <br />
            <input
              type="file"
              id="file-upload"
              name="file-upload"
              multiple
              onChange={handleFilesChange}
            />
            <ul>
              {files.map((file) => (
                <li key={file.name}>{file.name}</li>
              ))}
            </ul>
          </div>
        )}

        {data &&
          data.getConsultancyById?.data?.allow_enable_video_by_requester && (
            <div>
              <Checkbox
                isSelected={true}
                onChange={handleAllowVideo}
                css={{ mt: 20 }}
                color="primary"
              >
                <span
                  style={{
                    fontSize: "14px",
                    color: "var(--nextui-colors-primary)",
                  }}
                >
                  Allow Live video
                </span>
              </Checkbox>
            </div>
          )}
        {data && data.getConsultancyById?.data?.allow_ongoing_support_check && (
          <div>
            <Checkbox
              isSelected={true}
              onChange={handleOngoingSupport}
              css={{ mt: 20 }}
              color="primary"
            >
              <span
                style={{
                  fontSize: "14px",
                  color: "var(--nextui-colors-primary)",
                }}
              >
                Ongoing support needed
              </span>
            </Checkbox>
          </div>
        )}

        {data && data.getConsultancyById?.data?.allow_gender_check && (
          <div style={{ marginTop: "20px" }}>
            <Radio.Group label="Gender" defaultValue="A">
              <Radio value="A">Male</Radio>
              <Radio value="B">Femail</Radio>
              <Radio value="C">Other</Radio>
            </Radio.Group>
          </div>
        )}

        <div style={{ marginTop: "50px" }}>
        {scheduledAt &&
          <div style={{ display: 'flex' }}><Text h6 css={{ color: 'green' }}>{ (<span>You have scheduled From: {sheduledStart} - To: {scheduledAt}</span>)}</Text><Button css={{ ml: 6 }}size={"xs"} onPress={clearSchedule}>Clear</Button></div>}
          <Text h4>Consultant availabilite:</Text>
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
            eventClick={handleEventClick}

            // custom render function
          />
        </div>
      </Container>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Set duration
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text>Starts at: {sheduledStart}</Text>
          <Input
            bordered
            label="Minutes"
            fullWidth
            color="primary"
            type={"number"}
            size="lg"
            value={duration}
            onChange={handleDurationChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="secondary" onPress={setScheduleHandler}>
            Set
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const apolloClient = initializeApollo()
  const id = context.query?.id ? parseInt(context.query?.id[0]) : 0
  if (id) {
    try {
      await apolloClient.query<
        GetConsultancyByIdQuery,
        GetConsultancyByIdQueryVariables
      >({
        query: GetConsultancyByIdDocument,
        variables: { id, isActive: true },
      })
    } catch (err) {}
  }
  return { props: { initialApolloState: apolloClient.cache.extract() } }
}
ConsultancyView.auth = {
  role: "guest",
}

export default ConsultancyView
