import { PropsWithChildren, ReactNode } from 'react'

type DomLayoutProps = {
  children?: ReactNode
}

function DomLayout({ children }: DomLayoutProps) {
  return (
    <main className='container mx-auto py-4 min-h-screen relative'>
      {children}
      <footer className='absolute bottom-4 md:bottom-6 w-full'>
        <hr className='mb-4' />
        <p>© 2022 All Rights Reserved</p>
      </footer>
    </main>
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
}

export default function Layout({ dom = false, children }: PropsWithChildren<LayoutProps>) {
  return <>{dom ? <DomLayout>{children}</DomLayout> : <CanvasLayout>{children}</CanvasLayout>}</>
}
