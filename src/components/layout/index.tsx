import { PropsWithChildren } from 'react'

import Footer from './footer'
import Header from './header'
import Main from './main'

type LayoutProps = {
  home?: boolean
}

export default function Layout({ home = false, children }: PropsWithChildren<LayoutProps>) {
  return (
    <div className='container mx-auto h-screen'>
      <div className='flex flex-col h-full justify-between'>
        <Header home={home} />
        <Main>{children}</Main>
        <Footer />
      </div>
    </div>
  )
}
