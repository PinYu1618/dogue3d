import Link from 'next/link'

import Layout from '@/components/layout'
import { PropsWithChildren } from 'react'

type InputProps = {
  placeholder?: string
}

function Input({ placeholder }: InputProps) {
  return (
    <input
      type='text'
      className='mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black'
      placeholder={placeholder}
    />
  )
}

type FormItemProps = {
  label?: string
  placeholder?: string
}

function FormItem({ label, placeholder }: FormItemProps) {
  return (
    <>
      <label className='block'>{label}</label>
      <Input placeholder={placeholder} />
    </>
  )
}

type FormProps = {
  title?: string
}

function Form({ title, children }: PropsWithChildren<FormProps>) {
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

export default function LoginPage() {
  return (
    <Layout>
      <div className=''>
        <Form title='Log In'>
          <FormItem label='User Name' />
          <FormItem label='Password' />
        </Form>
        <Link href='/signup'>Don&apos;t have an account ?</Link>
      </div>
    </Layout>
  )
}
