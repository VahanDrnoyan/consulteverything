import { createServer, createPubSub, PubSub } from "@graphql-yoga/node";
import {NextApiRequest, NextApiResponse, PageConfig} from "next";
import {schema} from "../../graphql/schema"
import {context} from "../../graphql/context";
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
export const config: PageConfig = {
    api: {
        bodyParser: false
    }
}

const server = createServer<
  {
    req: NextApiRequest;
    res: NextApiResponse;
  },
    {
    pubSub: any;
  }
>({
  context,
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