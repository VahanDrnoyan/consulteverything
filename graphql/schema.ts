import path from "path";
import { makeSchema, queryType, objectType, arg, nonNull, stringArg, idArg} from "nexus";
import * as Tips from"../Tips/graphql/types"
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
      type: User!,
      args: {
      },
      resolve: async () => {
        return []
      }
    })

    t.field('getOneUser', {
      type: User!,
      args: {
        id: nonNull(stringArg())
      },
      resolve: async () => {
       return {id:1}
      }
    })

     t.field('getOneEvent', {
      type: Event!,
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
  types: [User, Query, Event, Tips],
  outputs: {
    schema: path.join(process.cwd(), 'schema.graphql'),
    typegen: path.join(process.cwd(), 'nexus.d.ts'),
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
