import { useSession } from "next-auth/react"
import React from 'react';
import { useRouter } from "next/router";


export const SuperAdminAuth: ({children}: { children: any }) => (JSX.Element) = ({ children }) => {
  const router = useRouter();
  const { status } = useSession({ required: true ,
  onUnauthenticated() {
       router.push({
         pathname: '/',
         query: {
           loginRequired: true
         }
       } )
    },})

  if (status === "loading") {
    return <div>Loading...</div>
  }

  return children
}