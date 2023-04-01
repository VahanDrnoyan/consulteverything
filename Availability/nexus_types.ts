import { Prisma } from "@prisma/client"
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
import { GraphQLError } from "graphql"

import { Availability } from "../generated/nexus-prisma"
import { AvailabilityArgsValidator } from "../Validators/BackendValidators/AvailabilityArgsValidator"

export const AvailabilityType = objectType({
  name: Availability.$name,
  description: Availability.$description,
  definition(t) {
    t.field(Availability.id)
    t.field(Availability.is_reserved)
    t.field(Availability.start)
    t.field(Availability.end)
    t.field(Availability.User)
  },
})
export const AvailabilityResolver = mutationField("createAvailability", {
  type: AvailabilityType,
  args: {
   data: nonNull("AvailabilityDataType"),
  },
  resolve: async (_root, args, { prisma, user }) => {
    await AvailabilityArgsValidator(args.data).catch((err) => {
      return Promise.reject(
        new GraphQLError(`User input error ${err.errors[0]}`)
      )
    })
    const availabilityParams: Prisma.AvailabilityCreateArgs = {
      data: {
        ...args.data,

        User: {
          connect: { id: user.id },
        },
      },
    }
    const result = await prisma.availability.create({
      ...availabilityParams,
    })
    return result
  },

})

export const AvailabilityDataType = extendInputType({
  type: "AvailabilityDataType",
  definition(t) {
    t.field(Availability.is_reserved)
    t.field(Availability.start)
    t.field(Availability.end)
    
  },
})
export const DeleteAvailability = extendType({
  type: "Mutation",
  definition(t) {
    t.field("DeleteAvailability", {
      type: AvailabilityType,
      args: {
        id: nonNull(idArg()),
      },
      resolve: async (_root, args, { prisma, user }) => {
        const selectAvailability: Prisma.AvailabilityFindUniqueArgs = {
          where: {
            id: args.id,
          },
        }
        const availability = await prisma.availability.findUnique(
          selectAvailability
        )
        if (!availability) {
          return Promise.reject(
            new GraphQLError(`Not found`)
          )
    
        }
        if (availability.userId !== user.id) {
          return Promise.reject(
            new GraphQLError(`No permisssion`)
          )
    
        }
        const availabilityDeleteArgs: Prisma.AvailabilityDeleteArgs = {
          where: {
            id: availability.id,
          },
        }
        const deletedAvailability = await prisma.availability.delete({ ...availabilityDeleteArgs })
      
        return deletedAvailability
      },
    })
  },
})

export const GetMyAvailabilities = extendType({
  type: "Query",
  definition(t) {
    t.list.field("getMyAvailabilities", {
      type: AvailabilityType,
      resolve: async (_root, args, { prisma, user }) => {
        const params: Prisma.AvailabilityFindManyArgs = {
          where: {
            User: user,
          },
        }
        return await prisma.availability.findMany({
          ...params,
        })
      },
    })
  },
})

export const AvailabilityUpdateResolver = extendType({
  type: "Mutation",
  definition(t) {
    t.field("updateAvailability", {
      type: AvailabilityType,
      args: {
        id: nonNull(idArg()),
        data: nonNull("AvailabilityDataType"),
      },
      resolve: async (_root, args, { prisma, user }) => {
        await AvailabilityArgsValidator(args.data).catch((err) => {
          return Promise.reject(
            new GraphQLError(`User input error ${err.errors[0]}`)
          )
        })
    
        const selectAvailability: Prisma.AvailabilityFindUniqueArgs = {
          where: {
            id: args.id,
          },
        }
        const availabilityUnique = await prisma.availability.findUnique(
          selectAvailability
        )
        if (!availabilityUnique || availabilityUnique.userId !== user.id) {
          return Promise.reject(
            new GraphQLError(`Could not find availability.`)
          )
    
        }
        const availabilityUpdateParams: Prisma.AvailabilityUpdateArgs = {
          where: {
            id: args.id,
          },

          data: {
            ...args.data,
          },
          select: {
            id: true,
          },
        }

        const availability = await prisma.availability.update({
          ...availabilityUpdateParams,
        })
        return availability
      },
    })
  },
})
