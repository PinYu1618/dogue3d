import { FormEventHandler, PropsWithChildren } from 'react'

type FormProps = {
  title?: string
  onSubmit?: FormEventHandler<HTMLFormElement>
}

export function Form({ title, onSubmit, children }: PropsWithChildren<FormProps>) {
  return (
    <div className='min-w-fit max-w-md bg-teal-400 py-4 px-8'>
      <h2 className='text-2xl font-bold'>{title}</h2>
      <div className='py-12'>
        <div className='mt-8 max-w-md'>
          <form className='grid grid-cols-1 gap-6' onSubmit={onSubmit}>
            {children}
          </form>
        </div>
      </div>
    </div>
  )
}
