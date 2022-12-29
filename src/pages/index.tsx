import Layout from '@/components/layout'
import LoginForm from '@/components/login-form'
import Logo from '@/components/logo'
import { useUser } from '@/hooks/useUser'
import { useEffect } from 'react'

export default function Index() {
  const user = useUser((state) => state.user)

  useEffect(() => {
    if (user !== null) {
      console.log(user.name)
    }
  }, [user])

  return (
    <Layout>
      <div className='h-full container flex flex-col content-center justify-center'>
        <div className='m-auto'>
          <LoginForm />
        </div>
      </div>
    </Layout>
  )
}
