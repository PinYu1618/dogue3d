import type { AppProps } from 'next/app'

//^TODO: use custom font family (This font is very cute)
import localFont from '@next/font/local'

import { useCreateStore, Provider } from '@/lib/store'

import '@/styles/globals.css'
import Head from '@/config'

export default function App({ Component, pageProps }: AppProps) {
  const createStore = useCreateStore(pageProps.initialZustandState)

  return (
    <Provider createStore={createStore}>
      <Head />
      <Component {...pageProps} />
    </Provider>
  )
}
