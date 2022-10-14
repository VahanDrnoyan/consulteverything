import { useSession } from "next-auth/react"
import React from 'react';
import { useRouter } from "next/router";


export const SuperAdminAuth: ({children}: { children: any }) => (JSX.Element) = ({ children }) => {
  const router = useRouter();
  const { status, data } = useSession({ required: true})
  
  if(data?.user?.role === 'USER' || data?.user?.role === 'MODERATOR' || data?.user?.role === 'ADMIN'){
      router.push({
        pathname: '/dashboard',
        query: {
          loginRequired: true
        }
      } )
  }


  if (status === "loading") {
    return <div>Loading...</div>
  }

  return children
}