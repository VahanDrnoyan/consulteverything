import {getSession} from "next-auth/react";
import {prisma} from "../lib/prisma";
import {createPubSub} from "@graphql-yoga/node";
import {NextApiRequest, NextApiResponse} from "next";

export const context = async ({req}:{
    req: NextApiRequest;
    res: NextApiResponse;
  } ) => {
      const session = await getSession({ req });
      return {
          user: { ...session?.user, _id: session?.userId } as any,
          prisma
      }
  }
  export type  MainContext = Awaited<ReturnType<typeof context>>
