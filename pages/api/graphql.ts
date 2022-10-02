import { createServer, createPubSub, PubSub } from "@graphql-yoga/node";
import {NextApiRequest, NextApiResponse, PageConfig} from "next";
import {schema} from "../../lib/schema"
import { getSession } from "next-auth/react";
import {prisma} from "../../lib/prisma";
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
export const config: PageConfig = {
    api: {
        bodyParser: false
    }
}
const pubSub = createPubSub<{
  "user:newMessage": [userId: string, message: string];
  "user:newChat": [userId: string, chat: string];
}>();
export type pubSub = typeof pubSub;

const server = createServer<
  {
    req: NextApiRequest;
    res: NextApiResponse;
  },
    {
    pubSub: any;
  }
>({
  context: async ({req}) => {
      const session = await getSession({ req });
      return {
          user: { ...session?.user, _id: session?.userId } as any,
          pubSub,
          prisma
      }
  },
    schema,
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground({
      settings: {
        "request.credentials": "include",
      },
    }),
    ]
});

export default server;