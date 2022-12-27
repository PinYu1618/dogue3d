import { ReactNode } from 'react'

type TopbarProps = {
  right?: ReactNode
}

export default function Topbar({ right }: TopbarProps) {
  return (
    <>
      <div className='flex flex-row justify-between'>
        <h2 className='font-extrabold text-4xl'>
          Dogue<span className='text-base font-normal'>3d</span>
        </h2>
        {right}
      </div>
      <hr />
    </>
  )
}
