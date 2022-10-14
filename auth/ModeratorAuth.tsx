import { useSession } from "next-auth/react"
import React, { useEffect } from 'react';
import { useRouter } from "next/router";


export const ModeratorAuth: ({children}: { children: any }) => (JSX.Element) = ({ children }) => {
  const router = useRouter();
  const { status, data } = useSession({ required: true })


  if(data?.user?.role === 'USER'){
    router.push({
      pathname: '/dashboard',
    } )
  }

  if (status === "loading") {
    return <div>Loading...</div>
  }

  return children
}