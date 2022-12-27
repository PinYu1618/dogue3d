import { PropsWithChildren, ReactNode } from 'react'

import Container from './container'
import Footer from './footer'
import Topbar from './topbar'

type MainProps = {
  children?: ReactNode
}

function Main({ children }: MainProps) {
  return <main className='bg-lime-700 grow'>{children}</main>
}

type DomLayoutProps = {
  home?: boolean
}

export default function DomLayout({ home = false, children }: PropsWithChildren<DomLayoutProps>) {
  return (
    <Container>
      <div className='h-screen'>
        <div className='flex flex-col h-full justify-between'>
          <Topbar home={home} />
          <Main children={children} />
          <Footer />
        </div>
      </div>
    </Container>
  )
}
