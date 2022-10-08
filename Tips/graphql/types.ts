import {objectType, extendType, nonNull, stringArg} from "nexus";

export const Tip = objectType({
  name: 'Tip',
  definition(t) {
    t.nonNull.id('id')
  }
})
export const TipQuery = extendType({
  type: 'Query',
  definition(t) {
    t.field('getTip', {
      type: Tip!,
      args: {
        id: nonNull(stringArg())
      },
      resolve: async () => {
       return {id:3}
      }
    })
  },
})