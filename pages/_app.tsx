import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {SessionProvider} from "next-auth/react"
import {Session} from "next-auth";
import PrimeReact from 'primereact/api';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import "primeflex/primeflex.css"
import {DashboardAuth} from "../auth/DashboardAuth";
import type {NextComponentType} from 'next'
import {ModeratorAuth} from "../auth/ModeratorAuth";
import {AdminAuth} from "../auth/AdminAuth";
import {SuperAdminAuth} from "../auth/SuperAdminAuth";
import {Role} from "@prisma/client";
PrimeReact.ripple = true;


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
                    <Component {...pageProps} />
                </DashboardAuth>
            ) : Component.auth?.role === 'MODERATOR' ? (
                <ModeratorAuth>
                    <Component {...pageProps} />
                </ModeratorAuth>
            ) : Component.auth?.role === 'ADMIN' ? (
                <AdminAuth>
                    <Component {...pageProps} />
                </AdminAuth>
            ) : Component.auth?.role === 'SUPERADMIN'?(
                <SuperAdminAuth>
                    <Component {...pageProps} />
                </SuperAdminAuth>
                ): (
                <Component {...pageProps} />
            )}
        </SessionProvider>
    )
}

export default MyApp
