import type { AppProps } from 'next/app'
import localFont from '@next/font/local'

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
