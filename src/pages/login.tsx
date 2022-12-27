import Link from 'next/link'

import Layout from '@/components/layout'

export default function LoginPage() {
  return (
    <Layout dom>
      <Link href='/signup'>Don&apos;t have an account ?</Link>
    </Layout>
  )
}
