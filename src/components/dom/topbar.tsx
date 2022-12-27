import { ReactNode } from 'react'

import Button from '@/components/dom/button'

function HomeTopbar() {
  return (
    <>
      <Button text='Login' href='/login' />
    </>
  )
}

type TopbarProps = {
  home?: boolean
  right?: ReactNode
}

export default function Topbar({ home }: TopbarProps) {
  return (
    <>
      <div className='flex flex-row justify-between'>
        <h2 className='font-extrabold text-4xl'>
          Dogue<span className='text-base font-normal'>3d</span>
        </h2>
        {home ? <HomeTopbar /> : null}
      </div>
      <hr />
    </>
  )
}
