import { makeSchema, queryType, objectType, enumType, nonNull, booleanArg, stringArg, intArg, mutationType, nullable, scalarType } from "nexus";
import { Prisma } from '@prisma/client'
import { User, Account, Consultancy, Field, Role } from '../generated/nexus-prisma'
import path from "path";
import * as ConsultancyTypes from "../Consultancy/types"
import { Kind } from "graphql";
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
    t.field(User.name)
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
 export  const Time = scalarType({
    name: "Time",
    asNexusMethod: "Time",
    description: "Date custom scalar type",
    parseValue(value:any) {
      const date = new Date(value);
      return date.getTime();
    },
    serialize(value: any) {
      return new Date(value);
    },
    parseLiteral(ast: any) {
      if (ast.kind === Kind.INT) {
        return new Date(ast.value);
      }
      return null;
    },
  });
export const schema = makeSchema({
  types: [
    UserType,
    Event,
    Mutation,
    AccountType,
    RoleEnum,
   Time,
  ConsultancyTypes],
  outputs: {
    schema: path.join(process.cwd(), 'schema.graphql'),
    typegen: path.join(process.cwd(), 'nexus.d.ts'),
  },
  contextType: {
    module: path.join(process.cwd(), 'lib/context.ts'),
    export: 'MainContext'
  },
  sourceTypes: {
    modules: [
      {
        module: '@prisma/client',
        alias: 'prisma'
      }
    ]
  },
  
})
