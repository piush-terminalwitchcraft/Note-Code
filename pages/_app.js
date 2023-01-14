import '../styles/globals.css';
import { SessionProvider } from "next-auth/react"
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps,session }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )

}
            