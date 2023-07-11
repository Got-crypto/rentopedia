import { Footer, Navbar } from '@/components'
import { StateContext } from '@/context/StateContext'
import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'

function App({ Component, pageProps: {session, pageProps} }) {
  return (
    <SessionProvider session={session}>
      <StateContext>
        <Navbar />
        <div className='mt-16'>
          <Component {...pageProps} />
        </div>
        <Footer />
      </StateContext>
    </SessionProvider>
  )
}

export default App