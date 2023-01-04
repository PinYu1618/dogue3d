import { gql, useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'

import Button from '@/components/button'
import { Form, Input, Label } from '@/components/form'
import Layout from '@/components/layout'
import { getErrorMessage } from '@/lib/graphql'

const SignupMutation = gql`
  mutation SignupMutation($name: String!, $pswrd: String!) {
    signup(input: { name: $name, pswrd: $pswrd }) {
      user {
        id
        name
      }
    }
  }
`

export default function SignupPage() {
  const [signup] = useMutation(SignupMutation)
  const router = useRouter()

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
    try {
      await signup({
        variables: { name: userName, pswrd }
      })
      router.push('/login')
    } catch (error) {
      alert(getErrorMessage(error))
    }
  }

  return (
    <Layout>
      <div className='h-full container flex flex-col content-center justify-center'>
        <div className='m-auto'>
          <Form title='Sign Up' onSubmit={handleSubmit}>
            <Label text='Name' htmlFor='userName' />
            <Input type='text' value={userName} onChange={(ev) => setUserName(ev.target.value)} />
            <Label text='Password' htmlFor='pswrd' />
            <Input type='password' value={pswrd} onChange={(ev) => setPswrd(ev.target.value)} />
            <button type='submit' className='bg-sky-300 rounded py-1 '>
              Sign up
            </button>
          </Form>
        </div>
      </div>
    </Layout>
  )
}
