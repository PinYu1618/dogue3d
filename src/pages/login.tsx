import { gql, useApolloClient, useMutation } from '@apollo/client'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'

import { Form, Input, Label } from '@/components/form'
import Layout from '@/components/layout'
import { getErrorMessage } from '@/lib/graphql'

const LoginMutation = gql`
  mutation LoginMutation($name: String!, $pswrd: String!) {
    login(input: { name: $name, pswrd: $pswrd }) {
      user {
        id
        name
      }
    }
  }
`

export default function LoginPage() {
  const client = useApolloClient()
  const [login] = useMutation(LoginMutation)
  const router = useRouter()

  const [userName, setUserName] = useState('')
  const [pswrd, setPswrd] = useState('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!userName || !pswrd) {
      alert('Missing Name or Password')
      return
    }
    try {
      await client.resetStore()
      const { data } = await login({
        variables: {
          name: userName,
          pswrd
        }
      })
      if (data.login.user) {
        await router.push('/')
      }
    } catch (error) {
      alert(getErrorMessage(error))
    }
  }

  return (
    <>
      <Layout>
        <div className='h-full container flex flex-col content-center justify-center'>
          <div className='m-auto'>
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
              <Input
                type='password'
                required
                value={pswrd}
                onChange={(e) => setPswrd(e.target.value)}
              />
              <button type='submit' className='bg-green-50'>
                Submit
              </button>
              <Link href='/signup' className='mt-5 text-sm'>
                Don&apos;t have an account ?
              </Link>
            </Form>
          </div>
        </div>
      </Layout>
    </>
  )
}
