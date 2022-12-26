import { PropsWithChildren } from 'react'

import Footer from '@/components/dom/footer'

type LayoutProps = {
  inGame?: boolean
}

export default function Layout({ inGame = false, children }: PropsWithChildren<LayoutProps>) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  )
}
