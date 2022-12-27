import Link from 'next/link'

import Layout from '@/components/layout'
import { Form, Input, Label } from '@/components/form'
import Button from '@/components/button'

export default function LoginPage() {
  return (
    <Layout>
      <div className='h-full container flex flex-col content-center justify-center'>
        <div className='mx-auto'>
          <Form title='Log In'>
            <Label label='User Name' />
            <Input />
            <Label label='Password' />
            <Input />
            <Button text='Login' href='/api/user' />
            <Link href='/signup'>Don&apos;t have an account ?</Link>
          </Form>
        </div>
      </div>
    </Layout>
  )
}
