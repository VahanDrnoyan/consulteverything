import {getSession} from "next-auth/react";
import {prisma} from "../lib/prisma";
import {createPubSub} from "@graphql-yoga/node";
import {NextApiRequest, NextApiResponse} from "next";
const pubSub = createPubSub<{
  "user:newMessage": [userId: string, message: string];
  "user:newChat": [userId: string, chat: string];
}>();
export type pubSub = typeof pubSub;

export const context = async ({req}:{
    req: NextApiRequest;
    res: NextApiResponse;
  } ) => {
      const session = await getSession({ req });
      return {
          user: { ...session?.user, _id: session?.userId } as any,
          pubSub,
          db: prisma
      }
  }