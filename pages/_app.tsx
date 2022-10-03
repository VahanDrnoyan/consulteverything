import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { Session } from "next-auth";
interface CustomAppProps {
    Component: AppProps["Component"],
    pageProps: AppProps["pageProps"] & {
        session: Session
    }
}
function MyApp({ Component, pageProps}: CustomAppProps) {
  return  (
      <SessionProvider session={pageProps.session}>
          <Component {...pageProps} />
        </SessionProvider>
  )
}

export default MyApp
