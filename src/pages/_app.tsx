import type { AppProps } from 'next/app'

import '@/styles/globals.css'
import Head from '@/config'
import Layout from '@/components/layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
