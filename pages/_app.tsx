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
import Layout from '../components/Layout';
import { useApollo } from '../lib/client';
import { ApolloProvider } from '@apollo/client';

interface CustomAppProps {
    Component: NextComponentType & { auth: { role: Role } },
    pageProps: AppProps["pageProps"] & {
        session: Session
    }
}

function MyApp({Component, pageProps: {session, ...pageProps}}:CustomAppProps) {
    const apolloClient = useApollo({});
    return (
        <ApolloProvider client={apolloClient}>
        <SessionProvider session={session}>
            {Component.auth?.role === 'USER' ? (
                <DashboardAuth>
                     <NextUIProvider><Layout><Component {...pageProps} /></Layout></NextUIProvider>
                    
                </DashboardAuth>
            ) : Component.auth?.role === 'MODERATOR' ? (
                <ModeratorAuth>
                    <NextUIProvider><Layout><Component {...pageProps} /></Layout></NextUIProvider>
                </ModeratorAuth>
            ) : Component.auth?.role === 'ADMIN' ? (
                <AdminAuth>
                    <NextUIProvider><Layout><Component {...pageProps} /></Layout></NextUIProvider>
                </AdminAuth>
            ) : Component.auth?.role === 'SUPERADMIN'?(
                <SuperAdminAuth>
                    <NextUIProvider><Layout><Component {...pageProps} /></Layout></NextUIProvider>
                </SuperAdminAuth>
                ): (
                <NextUIProvider><Layout><Component {...pageProps} /></Layout></NextUIProvider>
            )}
        </SessionProvider>
        </ApolloProvider>
    )
}

export default MyApp
