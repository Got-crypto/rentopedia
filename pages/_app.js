import { StateContext } from '@/context/StateContext'
import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'

function App({ Component, pageProps: {session, pageProps} }) {
  return (
    <SessionProvider session={session}>
      <StateContext>
        <Component {...pageProps} />
      </StateContext>
    </SessionProvider>
  )
}

export default App