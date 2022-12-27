import Link from 'next/link'

import Layout from '@/components/layout'
import { Form, Input, Label } from '@/components/form'
import Button from '@/components/button'

export default function LoginPage() {
  return (
    <Layout>
      <div className=''>
        <Form title='Log In'>
          <Label label='User Name' />
          <Input />
          <Label label='Password' />
          <Input />
          <Button text='Login' href='/api/user' />
        </Form>
        <Link href='/signup'>Don&apos;t have an account ?</Link>
      </div>
    </Layout>
  )
}
