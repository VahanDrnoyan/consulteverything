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
import {
  User,
  Account,
  Consultancy,
  Field,
  Tag,
} from "../generated/nexus-prisma"
import { GraphQLDate, GraphQLTime, GraphQLDateTime } from "graphql-iso-date"
import { Prisma } from "@prisma/client"
import { number, string } from "prop-types"
const algoliasearch = require("algoliasearch")
import { GraphQLError } from "graphql"
import { ConsultancyArgsValidator } from "../Validators/BackendValidators/ConsultancyArgsValidator"
import { GraphQLYogaError } from "@graphql-yoga/node"
import { TagInputType as TagType } from "../generated/graphql-frontend"
import { NexusObjectTypeDef } from "nexus/dist/definitions/objectType"

export const FieldEnum = enumType({
  name: Field.name,
  members: Field.members,
  description: "Form fields types",
})
export const ConsultancyType = objectType({
  name: Consultancy.$name,
  description: Consultancy.$description,
  definition(t) {
    t.field(Consultancy.title)
    t.field(Consultancy.short_description)
    t.field(Consultancy.long_description)
    t.field(Consultancy.max_attachment_count)
    t.field(Consultancy.max_time_minuets)
    t.field(Consultancy.id)
    t.field(Consultancy.allow_age_check)
    t.field(Consultancy.allow_email_check),
      t.field(Consultancy.allow_enable_video_by_requester)
    t.field(Consultancy.allow_expectations_check)
    t.field(Consultancy.allow_expertise_in_problem_field_check)
    t.field(Consultancy.allow_gender_check),
      t.field(Consultancy.allow_name_surname)
    t.field(Consultancy.allow_ongoing_support_check)
    t.field(Consultancy.allow_profession_check)
    t.field(Consultancy.isActive)
    t.field("created_at", { type: "Time" })
    t.field(Consultancy.allow_previous_consultancy_experience_check)
    t.field(Consultancy.allow_time_spent_issue_resolution_check)
    t.field(Consultancy.enable_video_by_provider)
    t.field(Consultancy.User)
    t.field(Consultancy.tags)
    t.field("last_requested_at", { type: "Time" })
  },
})
export const TagsType = objectType({
  name: Tag.$name,
  description: Tag.$description,
  definition(t) {
    t.field(Tag.name)
    t.field(Tag.id)
  },
})
export const TagInputType = extendInputType({
  type: "TagInputType",
  definition(t) {
    t.field(Tag.name)
    t.nullable.field(Tag.id)
  },
})
export const TagsExculededId = extendInputType({
  type: "TagsExculededId",
  definition(t) {
    t.field(Tag.name)
  },
})
export const ConsultancyDataType = extendInputType({
  type: "ConsultancyDataType",
  definition(t) {
    t.field(Consultancy.title)
    t.field(Consultancy.short_description)
    t.field(Consultancy.long_description)
    t.field(Consultancy.max_attachment_count)
    t.field(Consultancy.max_time_minuets)
    t.field("allow_age_check", { type: nonNull(FieldEnum) })
    t.field("allow_email_check", { type: nonNull(FieldEnum) })
    t.field(Consultancy.allow_enable_video_by_requester)
    t.field("allow_expectations_check", { type: nonNull(FieldEnum) })
    t.field("allow_expertise_in_problem_field_check", {
      type: nonNull(FieldEnum),
    })
    t.field("allow_gender_check", { type: nonNull(FieldEnum) })
    t.field("allow_name_surname", { type: nonNull(FieldEnum) })
    t.field("allow_ongoing_support_check", { type: nonNull(FieldEnum) })
    t.field("allow_profession_check", { type: nonNull(FieldEnum) })
    t.field("allow_previous_consultancy_experience_check", {
      type: nonNull(FieldEnum),
    })
    t.field("allow_time_spent_issue_resolution_check", {
      type: nonNull(FieldEnum),
    })
    t.field(Consultancy.enable_video_by_provider)
    t.field(Consultancy.isActive)
    t.field("created_at", { type: "Time" })
    t.field("tags", {
      type: nonNull(list(nonNull("TagInputType"))),
    })
  },
})

export const PageInfo = objectType({
  name: "PageInfo",
  definition(t) {
    t.string("endCursor")
    t.int("hasNextPage")
  },
})

export const ConsultancyEdge = objectType({
  name: "ConsultancyEdge",
  definition(t) {
    t.string("cursor")
    t.field("node", { type: ConsultancyType })
  },
})

export const ConsultancyConnection = objectType({
  name: "ConsultancyConnection",
  definition(t) {
    t.list.field("edges", { type: ConsultancyEdge })
    t.field("pageInfo", { type: PageInfo })
  },
})
export const ConsultancyPaginationInput = inputObjectType({
  name: "ConsultancyPaginationInput",
  definition(t) {
    t.nonNull.int("limit")
    t.string("cursor")
  },
})

export const consultancies = queryField("consultancies", {
  type: ConsultancyConnection,
  args: {
    pagination: arg({
      type: "ConsultancyPaginationInput",
    }),
  },
  resolve: async (parent, { pagination }, { prisma }) => {
    if (pagination) {
      const { limit, cursor } = pagination
      let query: Prisma.ConsultancyFindManyArgs = {
        skip: cursor ? 1 : 0,
        take: limit,
        // where: {
        // isActive: true,
        // },
        orderBy: {
          last_requested_at: "desc",
        },
        include: {
          User: {
            select: {
              name: true,
              id: true,
            },
          },
        },
      }
      if (cursor) {
        query.cursor = { id: cursor }
      }
      const consultancies = await prisma.consultancy.findMany(query)
      const edges = consultancies.map((consultancy) => ({
        cursor: consultancy.id,
        node: consultancy,
      }))
      const endCursor = edges[edges.length - 1]?.cursor
      const hasNextPage = await prisma.consultancy.count({
        where: { id: { gt: endCursor } },
      })
      return {
        edges,
        pageInfo: {
          endCursor,
          hasNextPage,
        },
      }
    }
    return null
  },
})

export const ConsultancyResolver = mutationField("createConsultancy", {
  type: ConsultancyType,
  args: {
    data: nonNull("ConsultancyDataType"),
  },
  resolve: async (_root, args, { prisma, user }) => {
    await ConsultancyArgsValidator(args.data).catch((err) => {
      return Promise.reject(
        new GraphQLError(`User input error ${err.errors[0]}`)
      )
    })
    const consultancyParams: Prisma.ConsultancyCreateArgs = {
      data: {
        ...args.data,

        User: {
          connect: { id: user.id },
        },
        tags: {
          createMany: {
            data: args.data.tags,
          },
        },
      },
    }
    // console.log(consultancyParams, 22222);
    const result = await prisma.consultancy.create({
      ...consultancyParams,
      include: {
        tags: true,
        User: true,
      },
    })
    const selectedConsultancy = await prisma.consultancy.findUnique({
      where: { id: result.id },
      include: { tags: true, User: true },
    })
    // console.log(result, 33333);
    if (selectedConsultancy) {
      const client = algoliasearch(
        process.env.NEXT_PUBLIC_SEARCH_APP_ID,
        process.env.SEARCH_APP_ADMIN_KEY
      )
      const index = client.initIndex(process.env.SEARCH_APP_INDEX)
      index.saveObject(
        {
          objectID: selectedConsultancy.id,
          id: selectedConsultancy.id,
          title: selectedConsultancy.title,
          long_description: selectedConsultancy.long_description,
          short_description: selectedConsultancy.short_description,
          tags: selectedConsultancy.tags,
          user: selectedConsultancy.User,
        },
        (err: any, content: any) => {
          if (err) throw err
          // console.log(content)
        }
      )
    }
    return result
  },
})
export const ConsultancyUpdateResolver = extendType({
  type: "Mutation",
  definition(t) {
    t.field("updateConsultancy", {
      type: ConsultancyType,
      args: {
        id: nonNull(idArg()),
        data: nonNull("ConsultancyDataType"),
      },
      resolve: async (_root, args, { prisma, user }) => {
        await ConsultancyArgsValidator(args.data).catch((err) => {
          return Promise.reject(
            new GraphQLError(`User input error ${err.errors[0]}`)
          )
    
        })
        const selectConsultancy: Prisma.ConsultancyFindUniqueArgs = {
          where: {
            id: args.id,
          },
        }
        const consultancyUnique = await prisma.consultancy.findUnique(
          selectConsultancy
        )
        if (!consultancyUnique || consultancyUnique.userId !== user.id) {
          return Promise.reject(
            new GraphQLError(`Could not find consultancy.`)
          )
    
        }
        const tags = args.data.tags
        const consultancyUpdateParams: Prisma.ConsultancyUpdateArgs = {
          where: {
            id: args.id,
          },

          data: {
            ...args.data,
            tags: {},
          },
          select: {
            id: true,
            title: true,
          },
        }
        const consultancy = await prisma.consultancy.update({
          ...consultancyUpdateParams,
        })
        await prisma.tag.deleteMany({
          where: {
            consultancyId: consultancy?.id,
          },
        })
        tags.map(async (tag: TagType) => {
          await prisma.tag.create({
            data: {
              name: tag.name,
              consultancyId: consultancy.id,
            },
          })
        })
        return consultancy
      },
    })
  },
})
export const GetMyConsultanciesResolver = extendType({
  type: "Query",
  definition(t) {
    t.list.field("getMyConsultancies", {
      type: ConsultancyType,
      args: {
        offset: nonNull(intArg()),
        limit: nonNull(intArg()),
      },
      resolve: async (_root, args, { prisma, user }) => {
        const params: Prisma.ConsultancyFindManyArgs = {
          orderBy: [
            {
              created_at: "desc",
            },
          ],
          skip: args.offset,
          take: args.limit,
          where: {
            User: user,
          },
        }
        return await prisma.consultancy.findMany({
          ...params,
        })
      },
    })
  },
})
export const TotalConsultancies = extendType({
  type: "Query",
  definition(t) {
    t.field("totalConsultancies", {
      type: TotalConsultanciesObject,
      args: {},
      resolve: async (_root, args, { prisma, user }) => {
        const total = await prisma.consultancy.count({ where: { User: user } })
        return { total }
      },
    })
  },
})
export const GetConsultancyById = extendType({
  type: "Query",
  definition(t) {
    t.field("getConsultancyById", {
      type: ConsultancyById,
      args: {
        id: nonNull(idArg()),
      },
      resolve: async (_root, args, { prisma, user }) => {
        const selectConsultancy: Prisma.ConsultancyFindUniqueArgs = {
          where: {
            id: args.id,
          },
        }
        const consultancy = await prisma.consultancy.findUnique(
          selectConsultancy
        )
        if (!consultancy) {
          return Promise.reject(
            new GraphQLError(`Not found`)
          )
    
        }
        if (consultancy.userId !== user.id) {
          return Promise.reject(
            new GraphQLError(`No permission}`)
          )
    
        }
        const consultancy_id = consultancy.id
        return {
          id: consultancy_id,
          data: consultancy,
        }
      },
    })
  },
})
export const TotalConsultanciesObject = objectType({
  name: "TotalConsultanciesObject",
  definition(t) {
    t.int("total")
  },
})

export const ConsultancyById = objectType({
  name: "ConsultancyById",
  definition(t) {
    t.nonNull.string("id")
    t.field("data", { type: nonNull(ConsultancyType) })
  },
})
//
export const DeleteConsultancy = extendType({
  type: "Mutation",
  definition(t) {
    t.field("deleteConsultancy", {
      type: ConsultancyType,
      args: {
        id: nonNull(idArg()),
      },
      resolve: async (_root, args, { prisma, user }) => {
        const selectConsultancy: Prisma.ConsultancyFindUniqueArgs = {
          where: {
            id: args.id,
          },
        }
        const consultancy = await prisma.consultancy.findUnique(
          selectConsultancy
        )
        if (!consultancy) {
          return Promise.reject(
            new GraphQLError(`Not found`)
          )
    
        }
        if (consultancy.userId !== user.id) {
          return Promise.reject(
            new GraphQLError(`No permisssion`)
          )
    
        }
        const consultancyDeleteArgs: Prisma.ConsultancyDeleteArgs = {
          where: {
            id: consultancy.id,
          },
        }
        await prisma.consultancy.delete({ ...consultancyDeleteArgs })
        return consultancy
      },
    })
  },
})
//
