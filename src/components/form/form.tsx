import { FormEventHandler, PropsWithChildren } from 'react'

type FormProps = {
  title?: string
  onSubmit?: FormEventHandler<HTMLFormElement>
}

export function Form({ title, onSubmit, children }: PropsWithChildren<FormProps>) {
  return (
    <div className='min-w-fit max-w-md bg-sky-200 py-5 px-9 rounded-lg'>
      <h2 className='text-2xl font-bold text-center'>{title}</h2>
      <div className=''>
        <div className='mt-8 max-w-md'>
          <form className='flex flex-col gap-4 sm:gap-6' onSubmit={onSubmit}>
            {children}
          </form>
        </div>
      </div>
    </div>
  )
}
