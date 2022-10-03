import NextAuth, {Session, User} from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import {prisma} from "../../../lib/prisma"
import CredentialsProvider from "next-auth/providers/credentials"
import {AppProps} from "next/app";
import {ISODateString} from "next-auth/core/types";
import {JWT} from "next-auth/jwt";
export interface CustomSession extends Session {
    user?: {
        name?: string | null;
        email?: string | null;
        image?: string | null;
        role?: string | null | unknown
    };
}
export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
       CredentialsProvider({
         // The name to display on the sign in form (e.g. 'Sign in with...')
         name: 'Credentials',
         // The credentials is used to generate a suitable form on the sign in page.
         // You can specify whatever fields you are expecting to be submitted.
         // e.g. domain, username, password, 2FA token, etc.
         // You can pass any HTML attribute to the <input> tag through the object.
         credentials: {
           username: {label: "Username", type: "text", placeholder: "jsmith"},
           password: {label: "Password", type: "password"}
         },
         async authorize(credentials, req) {
           // You need to provide your own logic here that takes the credentials
           // submitted and returns either a object representing a user or value
           // that is false/null if the credentials are invalid.
           // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
           // You can also use the `req` object to obtain additional parameters
           // (i.e., the request IP address)
           const res = await fetch("/your/endpoint", {
             method: 'POST',
             body: JSON.stringify(credentials),
             headers: {"Content-Type": "application/json"}
           })
           const user = await res.json()

           // If no error and we have user data, return it
           if (res.ok && user) {
             return user
           }
           // Return null if user data could not be retrieved
           return null
         }
       })
  ],
  callbacks: {
  async session({ session, token, user }:{session: CustomSession, token: JWT, user: User}) {
    if(session && session.user) {
      session.user.role = user.role;
    }
    return session;
  }
},
})