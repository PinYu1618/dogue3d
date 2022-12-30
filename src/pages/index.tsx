import Layout from '@/components/layout'
import LoginForm from '@/components/login-form'
import Logo from '@/components/logo'
import { useUser } from '@/stores/useUser'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Index() {
  const user = useUser((state) => state.user)
  const router = useRouter()

  useEffect(() => {
    if (user !== null) {
      router.push(`/games`)
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
