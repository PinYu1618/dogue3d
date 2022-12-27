import Link from 'next/link'
import { PropsWithChildren, ReactNode } from 'react'
import Topbar from './dom/topbar'

type ButtonProps = {
  text: string
  href: string
}

function Button({ text, href }: ButtonProps) {
  return (
    <Link href={href} className='block bg-sky-400 px-4 py-2 rounded-md shadow font-bold'>
      {text}
    </Link>
  )
}

type DomLayoutProps = {
  children?: ReactNode
  loggedIn?: boolean
}

function DomLayout({ children, loggedIn = false }: DomLayoutProps) {
  return (
    <main className='container mx-auto py-4 min-h-screen relative'>
      <Topbar right={loggedIn ? null : <Button text='Login' href='/login' />} />
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
