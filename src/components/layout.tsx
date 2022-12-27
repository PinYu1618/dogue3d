import { PropsWithChildren } from 'react'

import Footer from '@/components/dom/footer'

type LayoutProps = {
  inGame?: boolean
}

export default function Layout({ inGame = false, children }: PropsWithChildren<LayoutProps>) {
  return (
    <>
      {inGame ? (
        { children }
      ) : (
        <main className='container mx-auto py-4 min-h-screen relative'>
          {children}
          <footer className='absolute bottom-4 md:bottom-6'>© 2022 All Rights Reserved</footer>
        </main>
      )}
    </>
  )
}
