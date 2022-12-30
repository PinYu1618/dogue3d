import Link from 'next/link'
import { Input } from '@/components/form'
import { FormEvent, useState } from 'react'
import { Form, Label } from './form'
import { useUser } from '@/stores/useUser'

export default function LoginForm() {
  const login = useUser((state) => state.login)

  const [userName, setUserName] = useState('')
  const [pswrd, setPswrd] = useState('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!userName || !pswrd) {
      alert('Missing Name or Password')
      return
    }
    login(userName, pswrd)
  }
  return (
    <>
      <Form onSubmit={handleSubmit} title='Log In'>
        <Label htmlFor='userName' text='Name' />
        <Input
          type='text'
          name='userName'
          required
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <Label htmlFor='pswrd' text='Password' />
        <Input type='password' required value={pswrd} onChange={(e) => setPswrd(e.target.value)} />
        <button type='submit' className='bg-green-50'>
          Submit
        </button>
        <Link href='/signup' className='mt-5 text-sm'>
          Don&apos;t have an account ?
        </Link>
      </Form>
    </>
  )
}
