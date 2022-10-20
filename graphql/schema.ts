import { makeSchema, queryType, objectType, enumType, nonNull, booleanArg, stringArg, intArg, mutationType, nullable } from "nexus";
import { Prisma } from '@prisma/client'
import { User, Account, Consultancy, Field, Role } from '../generated/nexus-prisma'
import path from "path";
import {FiledEnum, ConsultancyResolver} from "../Consultancy/types"
const RoleEnum = enumType({
  name: 'Role',
  members: [Role.members[0], Role.members[1], Role.members[2], Role.members[3]],
  description: 'User Roles',
})

const UserType = objectType({
  name: User.$name,
  description: User.$description,
  definition(t) {
    t.field(User.id)
    t.field(User.email)
    t.field(User.accounts)
    t.field(User.role)
  }
})
const AccountType = objectType({
  name: Account.$name,
  description: Account.$description,
  definition(t) {
    t.field(Account.id)
    t.field(Account.session_state)
    t.field(Account.user)
  }
})
const Event = objectType({
  name: 'Event',
  definition(t) {
    t.nonNull.id('id')
  }
})
//onst Query = queryType({
//definition(t) {
// t.list.field('getUsers', {
//   type: UserType!,
//   args: {
//   },
//   resolve: async (_parent, args, { prisma, select }) => {
//     const userEmail: Prisma.UserFindManyArgs = {
//       where:{
//         email: {
//           contains: 'e'
//         }
//       },
//       include: {
//         accounts: true
//       }
//     }

//     // Use select object
//     const usersObj = await prisma.user.findMany(userEmail)
//     return usersObj
//   }

// })

// t.field('getOneUser', {
//   type: UserType!,
//   args: {
//     id: nonNull(stringArg())
//   },

// })

//  t.field('getOneEvent', {
//   type: Event!,
//   args: {
//     id: nonNull(stringArg())
//   },
// })
//   }
// })
const Mutation = mutationType({
  definition(t) {
    t.nonNull.field('createUser', {
      type: UserType,
      args: {
        email: nonNull(stringArg()),
      },
      resolve: async (_root, args, { prisma, user }) => {
        const userEmail: Prisma.UserCreateArgs = {
          data: {
            email: args.email,
          },
          select: {
            id: true,
            email: true,
          }
        }

        // Use select object
        const userObj = await prisma.user.create({ ...userEmail })
        return userObj
      },
    })
  
  }});
export const schema = makeSchema({
  types: [
    UserType,
    Event,
    Mutation,
    AccountType,
    RoleEnum,
    ConsultancyResolver,
    FiledEnum],
  outputs: {
    schema: path.join(process.cwd(), 'schema.graphql'),
    typegen: path.join(process.cwd(), 'nexus.d.ts'),
  },
  contextType: {
    module: path.join(process.cwd(), 'graphql/context.ts'),
    export: 'MainContext'
  },
  sourceTypes: {
    modules: [
      {
        module: '@prisma/client',
        alias: 'prisma'
      }
    ]
  }
})
