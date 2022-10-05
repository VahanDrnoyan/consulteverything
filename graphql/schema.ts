import path from "path";
import { makeSchema, queryType, objectType, arg, nonNull, stringArg, idArg} from "nexus";
const User = objectType({
  name: 'User',
  definition(t) {
    t.nonNull.id('id')
  }
})
const Event = objectType({
  name: 'Event',
  definition(t) {
    t.nonNull.id('id')
  }
})
const Query = queryType({
  definition(t) {
    t.list.field('getUsers', {
      type: User,
      args: {
      },
      resolve: async () => {
        return []
      }
    })

    t.field('getOneUser', {
      type: User,
      args: {
        id: nonNull(stringArg())
      },
      resolve: async () => {
       return []
      }
    })

     t.field('getOneEvent', {
      type: Event,
      args: {
        id: nonNull(stringArg())
      },
      resolve: async () => {
       return []
      }
    })
  }
})
export const schema = makeSchema({
  types: [User, Query, Event],
  outputs: {
    typegen: path.join(process.cwd(), 'graphql/generated/nexus.d.ts'),
  },
  contextType: {
    module: path.join(process.cwd(), 'graphql/context.ts'),
    export: 'Context'
  },
  sourceTypes: {
    modules: [
      {
        module: '@prisma/client',
        alias: 'db'
      }
    ]
  }
})
