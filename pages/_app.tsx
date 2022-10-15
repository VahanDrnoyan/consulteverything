import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {SessionProvider} from "next-auth/react"
import {Session} from "next-auth";
import {DashboardAuth} from "../auth/DashboardAuth";
import type {NextComponentType} from 'next'
import {ModeratorAuth} from "../auth/ModeratorAuth";
import {AdminAuth} from "../auth/AdminAuth";
import {SuperAdminAuth} from "../auth/SuperAdminAuth";
import {Role} from "@prisma/client";
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'
import { NextUIProvider } from '@nextui-org/react';

interface CustomAppProps {
    Component: NextComponentType & { auth: { role: Role } },
    pageProps: AppProps["pageProps"] & {
        session: Session
    }
}

function MyApp({Component, pageProps: {session, ...pageProps}}: CustomAppProps) {
    return (
        
        <SessionProvider session={session}>
            {Component.auth?.role === 'USER' ? (
                <DashboardAuth>
                     <NextUIProvider><Component {...pageProps} /></NextUIProvider>
                    
                </DashboardAuth>
            ) : Component.auth?.role === 'MODERATOR' ? (
                <ModeratorAuth>
                     <NextUIProvider><Component {...pageProps} /></NextUIProvider>
                </ModeratorAuth>
            ) : Component.auth?.role === 'ADMIN' ? (
                <AdminAuth>
                    <NextUIProvider><Component {...pageProps} /></NextUIProvider>
                </AdminAuth>
            ) : Component.auth?.role === 'SUPERADMIN'?(
                <SuperAdminAuth>
                     <NextUIProvider><Component {...pageProps} /></NextUIProvider>
                </SuperAdminAuth>
                ): (
                <Component {...pageProps} />
            )}
        </SessionProvider>
    )
}

export default MyApp
