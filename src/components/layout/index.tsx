import { PropsWithChildren, ReactNode } from 'react'

import Footer from './footer'
import Topbar from './topbar'

type MainProps = {
  children?: ReactNode
}

function Main({ children }: MainProps) {
  return <main className='grow'>{children}</main>
}

type LayoutProps = {
  home?: boolean
}

export default function Layout({ home = false, children }: PropsWithChildren<LayoutProps>) {
  return (
    <div className='container mx-auto h-screen'>
      <div className='flex flex-col h-full justify-between'>
        <Topbar home={home} />
        <Main>{children}</Main>
        <Footer />
      </div>
    </div>
  )
}
