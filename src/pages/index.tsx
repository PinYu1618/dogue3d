import { gql, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import Card from '@/components/card'
import Layout from '@/components/layout'
import Link from 'next/link'

const MeQuery = gql`
  query MeQuery {
    me {
      id
      name
    }
  }
`

const games = [
  {
    title: 'Room 6',
    href: '/game/room6',
    desc: 'Room 6 description'
  },
  {
    title: 'Rushing Marble',
    href: '/game/marble',
    desc: 'Rushing ball description'
  },
  {
    title: 'Mini Car Racing',
    href: '/game/racing'
  }
]

export default function Index() {
  const router = useRouter()
  const { data, loading, error } = useQuery(MeQuery)
  const me = data?.me
  const shouldRedirect = !(loading || error || me)

  useEffect(() => {
    if (shouldRedirect) {
      router.push('/login')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldRedirect])

  if (error) {
    return (
      <Layout>
        <p>{error.message}</p>
      </Layout>
    )
  }
  if (me) {
    return (
      <Layout>
        <div className='h-full container flex flex-col content-center justify-center'>
          <div className='m-auto'>
            <div id='game-list' className=''>
              {games.map((game) => (
                <Card
                  title={game.title}
                  href={game.href}
                  description={game.desc}
                  key={game.title}
                />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    )
  }
  return (
    <Layout>
      <p>Loading...</p>
    </Layout>
  )
}
