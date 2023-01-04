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
const divStyle = {
  marginLeft: '5%'
}

const games = [
  {
    title: 'Room',
    href: '/game/room6',
    desc: 'Room description',
    thumbnail: '/Room.jpg'
  },
  {
    title: 'Rushing Marble',
    href: '/game/marble',
    desc: 'Control a marble to pass all the obstacles as soon as possible!',
    thumbnail: '/Rushing Marble.jpg'
  },
  {
    title: 'Mini Car Racing',
    href: '/game/racing',
    desc: 'Conquer the road with your driving skill and leave others behind!',
    thumbnail: '/Mini Car Racing.jpg'
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
            <div id='game-list' className='flex'>
              {games.map((game) => (
                <>
                  <Card
                    title={game.title}
                    href={game.href}
                    description={game.desc}
                    key={game.title}
                    thumbnail={game.thumbnail}
                  />
                  <div style={divStyle}></div>
                </>
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
