import { DefaultSession } from "next-auth"
import {Role} from "@prisma/client";
declare module "next-auth" {
  export interface Session {
    user: {
      /** The user's postal address. */
      role: Role
    }& DefaultSession["user"]
  }
  export interface User {
      role: Role
  }
}