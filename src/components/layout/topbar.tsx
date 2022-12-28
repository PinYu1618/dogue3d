import { ReactNode } from 'react'

import Avatar from '@/components/avatar'
import Button from '@/components/button'
import useUser from '@/hooks/useUser'

function HomeTopbarRight() {
  const { user } = useUser()

  return <>{user ? <Avatar /> : null}</>
}

type TopbarProps = {
  home?: boolean
  right?: ReactNode
}

export default function Topbar({ home }: TopbarProps) {
  return (
    <div className='flex flex-col justify-between h-24 py-2'>
      <div className='flex flex-row justify-between'>
        <h2 className='font-bold text-4xl'>
          Dogue<span className='text-base font-normal'>3d</span>
        </h2>
        {home ? <HomeTopbarRight /> : null}
      </div>
      <hr className='' />
    </div>
  )
}
