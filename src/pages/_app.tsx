import type { AppProps } from 'next/app'

import '@/styles/globals.css'
import Head from '@/config'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head />
      <Component {...pageProps} />
    </>
  )
}
