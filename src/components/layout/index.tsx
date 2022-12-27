import { PropsWithChildren } from 'react'

import Container from './container'
import Footer from './footer'
import Topbar from './topbar'

type DomLayoutProps = {
  home?: boolean
}

export default function DomLayout({ home = false, children }: PropsWithChildren<DomLayoutProps>) {
  return (
    <>
      <Container>
        <div className='min-h-screen'>
          <Topbar home={home} />
          <main>{children}</main>
        </div>
        <Footer />
      </Container>
    </>
  )
}
