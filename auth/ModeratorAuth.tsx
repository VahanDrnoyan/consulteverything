import { useSession } from "next-auth/react"
import React from 'react';
import { useRouter } from "next/router";


export const ModeratorAuth: ({children}: { children: any }) => (JSX.Element) = ({ children }) => {
  const router = useRouter();
  const { status, data } = useSession({ required: true ,
  onUnauthenticated() {
   // if(data?.user?.role)
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