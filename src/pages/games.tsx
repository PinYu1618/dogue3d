/* TODO: Need layout this page ! */

import Card from '@/components/card'
import Layout from '@/components/layout'

const games = [
  {
    title: 'Game 1',
    href: '/',
    desc: 'Game 1 description'
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
  return (
    <Layout>
      <div id='game-list' className=''>
        {games.map((game) => (
          <Card title={game.title} href={game.href} description={game.desc} key={game.title} />
        ))}
      </div>
    </Layout>
  )
}
