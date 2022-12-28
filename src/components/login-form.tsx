import Link from 'next/link'
import { Input } from '@/components/form'
import { FormEvent, useState } from 'react'
import { Form, Label } from './form'

export default function LoginForm() {
  const [userName, setUserName] = useState('')
  const [pswrd, setPswrd] = useState('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = { userName, pswrd }
    const endpoint = '/api/user'
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }
    const response = await fetch(endpoint, options)
    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    alert(`Is this your name: ${result.data}`)
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
        <button type='submit'>Submit</button>
        <Link href='/signup'>Don&apos;t have an account ?</Link>
      </Form>
    </>
  )
}
