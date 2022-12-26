import { PropsWithChildren } from 'react'

import Footer from '@/components/footer'

type LayoutProps = {
  gamePage?: boolean
}

export default function Layout({ gamePage = false, children }: PropsWithChildren<LayoutProps>) {
  return (
    <>
      <main>{children}</main>
      {gamePage ? null : <Footer />}
    </>
  )
}
