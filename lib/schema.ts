import path from "path";
import { makeSchema } from "@nexus/schema";
import { join } from "path";
export const schema = makeSchema({
  types: [],
  // CRUD won't work without this option!!!
  plugins: [],
  outputs: {
    schema: path.join(process.cwd(), "schema.graphql"),
    typegen: path.join(process.cwd(), "nexus.ts"),
  },
  typegenAutoConfig: {
    contextType: "Context.Context",
    sources: [
      {
        source: "@prisma/client",
        alias: "prisma",
      },
      {
        source: join(process.cwd(), "lib/context.ts"),
        alias: "Context",
      },
    ],
  },
});
