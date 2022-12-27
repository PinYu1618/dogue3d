import { PropsWithChildren } from 'react'

type FormProps = {
  title?: string
}

export function Form({ title, children }: PropsWithChildren<FormProps>) {
  return (
    <div className='bg-red-600 py-8 flex flex-col items-center max-w-md shadow'>
      <h2 className='text-2xl font-bold'>{title}</h2>
      <div className='py-12'>
        <div className='mt-8 max-w-md'>
          <form className='grid grid-cols-1 gap-6'>{children}</form>
        </div>
      </div>
    </div>
  )
}
