import Link from 'next/link'

import Avatar from '@/components/avatar'
import { useStore } from '@/lib/store'

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
  const { user } = useStore()

  return <>{user ? <Avatar /> : null}</>
}

type HeaderProps = {
  gamesPage?: boolean
}

export default function Header({ gamesPage }: HeaderProps) {
  return (
    <div className='flex flex-col justify-between h-24 py-2 z-10'>
      <div className='flex flex-row justify-between'>
        <Left />
        {gamesPage ? <Right /> : null}
      </div>
      <hr className='' />
    </div>
  )
}
