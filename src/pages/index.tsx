import Layout from '@/components/layout'
import LoginForm from '@/components/login-form'
import Logo from '@/components/logo'

export default function Index() {
  return (
    <Layout>
      <div className='flex flex-col sm:flex-row bg-red-700 h-full'>
        <div className='self-center basis-3/5'>
          <div className='mx-auto w-fit'>
            <Logo size='large' />
          </div>
        </div>
        <div className='basis-2/5 self-center'>
          <div>
            <LoginForm />
          </div>
        </div>
      </div>
    </Layout>
  )
}
