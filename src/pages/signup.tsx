import Button from '@/components/button'
import { Form, Input, Label } from '@/components/form'
import Layout from '@/components/layout'
import { useUser } from '@/hooks/useUser'
import { FormEvent, useEffect, useState } from 'react'

export default function SignupPage() {
  const user = useUser((state) => state.user)
  const signup = useUser((state) => state.signup)

  const [userName, setUserName] = useState('')
  const [pswrd, setPswrd] = useState('')

  const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault()
    if (!userName) {
      alert('Name is required')
      return
    }
    if (!pswrd) {
      alert('Password is required')
      return
    }
    signup(userName, pswrd)
  }

  useEffect(() => {
    if (user !== null) {
      //^TODO: redirect to /games/[user]
      console.log(user.name)
    }
  }, [user])

  return (
    <Layout>
      <div className='h-full container flex flex-col content-center justify-center'>
        <div className='m-auto'>
          <Form title='Sign Up' onSubmit={handleSubmit}>
            <Label text='Name' htmlFor='userName' />
            <Input type='text' value={userName} onChange={(ev) => setUserName(ev.target.value)} />
            <Label text='Password' htmlFor='pswrd' />
            <Input type='password' value={pswrd} onChange={(ev) => setPswrd(ev.target.value)} />
            <Button text='Sign up' type='submit' />
          </Form>
        </div>
      </div>
    </Layout>
  )
}
