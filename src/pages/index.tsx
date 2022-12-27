import Card from '@/components/card'
import Layout from '@/components/layout'

const games = [
  {
    title: 'Game 1',
    href: '/',
    desc: 'Game 1 description'
  },
  {
    title: 'Rushing ball',
    href: '/game/rush',
    desc: 'Rushing ball description'
  },
  {
    title: 'Game 3',
    href: '/'
  }
]

export default function Index() {
  return (
    <Layout home>
      <div id='game-list' className='mt-40 mb-40 flex flex-col sm:flex-row items-center gap-4'>
        {games.map((game) => (
          <Card title={game.title} href={game.href} description={game.desc} key={game.title} />
        ))}
      </div>
    </Layout>
  )
}
