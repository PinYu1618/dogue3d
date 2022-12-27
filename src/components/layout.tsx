import { PropsWithChildren, ReactNode } from 'react'

import Container from '@/components/dom/container'
import Footer from '@/components/dom/footer'
import Topbar from '@/components/dom/topbar'

type DomLayoutProps = {
  children?: ReactNode
  home?: boolean
  loggedIn?: boolean
}

function DomLayout({ children, home = false }: DomLayoutProps) {
  return (
    <Container>
      <Topbar home={home} />
      {children}
      <Footer />
    </Container>
  )
}

type CanvasLayoutProps = {
  children?: ReactNode
}

function CanvasLayout({ children }: CanvasLayoutProps) {
  return <>{children}</>
}

type LayoutProps = {
  dom?: boolean
  home?: boolean
}

export default function Layout({
  dom = false,
  home = false,
  children
}: PropsWithChildren<LayoutProps>) {
  return (
    <>
      {dom ? (
        <DomLayout home={home}>{children}</DomLayout>
      ) : (
        <CanvasLayout>{children}</CanvasLayout>
      )}
    </>
  )
}
