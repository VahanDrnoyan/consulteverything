import NextAuth, {DefaultSession, Session, User} from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import {prisma} from "../../../lib/prisma"
import CredentialsProvider from "next-auth/providers/credentials"
import {AppProps} from "next/app";
import {ISODateString} from "next-auth/core/types";
import {JWT} from "next-auth/jwt";
import {Role, User as PrismaUser} from "@prisma/client";
import EmailProvider from "next-auth/providers/email";


export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD
        }
      },
      from: process.env.EMAIL_FROM
    }),
  ],
  callbacks: {
  async session({ session, token, user}) {
    if(session && session.user) {
      session.user.role = user.role;
      session.user.id = user.id;
    }
    return session;
  }
},
})