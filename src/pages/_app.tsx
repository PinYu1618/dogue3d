import type { AppProps } from 'next/app'

//^TODO: use custom font family (This font is very cute!)
import localFont from '@next/font/local'

import '@/styles/globals.css'
import Head from '@/config'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '@/lib/apollo/use-apollo'

export default function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState)

  return (
    <>
      <Head />
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  )
}
