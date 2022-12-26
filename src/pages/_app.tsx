import type { AppProps } from 'next/app'

import '@/styles/globals.css'
import Header from '@/config'
import Layout from '@/components/layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
