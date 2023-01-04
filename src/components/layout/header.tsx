import Link from 'next/link'

import Avatar from '@/components/avatar'
import { ReactNode } from 'react'
//import { useUser } from '@/stores/useUser'

function Left() {
  return (
    <>
      <Link href='/'>
        <h2 className='font-bold text-4xl'>
          Dogue<span className='text-base font-normal'>3d</span>
        </h2>
      </Link>
    </>
  )
}

function Right() {
  return (
    <>
      <Link href='/logout'>Log out</Link>
    </>
  )
}

type HeaderProps = {
  right?: boolean
}

export default function Header({ right }: HeaderProps) {
  return (
    <div className='flex flex-col justify-between h-24 py-2 z-10'>
      <div className='flex flex-row justify-between'>
        <Left />
        {right ? <Right /> : null}
      </div>
      <hr className='' />
    </div>
  )
}
