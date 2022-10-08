import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { Session } from "next-auth";
import PrimeReact from 'primereact/api';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";
import "primeflex/primeflex.css"
import  {DashboardAuth} from "../auth/DashboardAuth";
import type { NextComponentType  } from 'next'

PrimeReact.ripple = true;


interface CustomAppProps {
    Component: NextComponentType & {auth?: boolean},
    pageProps: AppProps["pageProps"] & {
        session: Session
    }
}

function MyApp({ Component, pageProps: { session, ...pageProps } }: CustomAppProps) {
  return  (
      <SessionProvider session={session}>
           {Component.auth ? (
        <DashboardAuth>
          <Component {...pageProps} />
        </DashboardAuth>
      ) : (
        <Component {...pageProps} />
      )}
        </SessionProvider>
  )
}

export default MyApp
