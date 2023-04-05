import {
  objectType,
  enumType,
  nonNull,
  booleanArg,
  stringArg,
  intArg,
  mutationType,
  nullable,
  extendType,
  mutationField,
  list,
  extendInputType,
  idArg,
  arg,
  queryField,
  queryType,
  inputObjectType,
} from "nexus"
import { Request, Gender } from "../generated/nexus-prisma"
export const FieldEnum = enumType({
  name: Gender.name,
  members: Gender.members,
  description: "Gender types",
})

export const RequestType = objectType({
  name: Request.$name,
  description: Request.$description,
  definition(t) {
    t.field(Request.id)
    t.field(Request.requestUser)
    t.field(Request.consultantUser)
    t.field(Request.age)
    t.field(Request.allow_live_video)
    t.field("created_at", { type: "Time" })
    t.field("scheduled_at", { type: "Time" })
    t.field(Request.isCanceled)
    t.field(Request.isCompleted), 
    t.field(Request.email)
    t.field(Request.expectations)
    t.field(Request.expertise)
    t.field(Request.gender)
    t.field(Request.name_surname)
    t.field(Request.time_spent_on_issue)
    t.field(Request.profession)
    t.field(Request.prevoiuos_experience)
    t.field(Request.ongoing_support_needed)
    t.field(Request.consultancy)
  },
})
export const RequestDataType = extendInputType({
    type: "RequestDataType",
    definition(t) {
        t.field(Request.age)
        t.field(Request.allow_live_video)
        t.field(Request.start)
        t.field(Request.end)
        t.field(Request.isCanceled)
        t.field(Request.isCompleted), 
        t.field(Request.email)
        t.field(Request.expectations)
        t.field(Request.expertise)
        t.field(Request.gender)
        t.field(Request.name_surname)
        t.field(Request.time_spent_on_issue)
        t.field(Request.profession)
        t.field(Request.prevoiuos_experience)
        t.field(Request.ongoing_support_needed)    
    },
  })
  