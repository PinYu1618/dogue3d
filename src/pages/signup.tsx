import Button from '@/components/button'
import { Form, Input, Label } from '@/components/form'
import Layout from '@/components/layout'

export default function SignupPage() {
  return (
    <Layout>
      <div className='h-full container flex flex-col content-center justify-center'>
        <div className='mx-auto'>
          <Form title='Sign Up'>
            <Label label='User Name' />
            <Input />
            <Label label='Password' />
            <Input />
            <Button text='Login' href='/api/user' />
          </Form>
        </div>
      </div>
    </Layout>
  )
}
