import { DefaultSession } from "next-auth"
import {Role} from "@prisma/client";
declare module "next-auth" {
  interface Session {
    user: {
      /** The user's postal address. */
      role: Role
    }& DefaultSession["user"]
  }
  interface User {
      role: Role
  }
}