import Card from '@/components/dom/card'
import Container from '@/components/dom/container'

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
    <>
      <button className='absolute right-12 top-8 bg-[#b7cadb] px-4 py-2 rounded-md font-semibold'>
        Login
      </button>
      <Container>
        <div id='game-list' className='flex flex-col sm:flex-row items-center gap-4'>
          {games.map((game) => (
            <Card title={game.title} href={game.href} description={game.desc} key={game.title} />
          ))}
        </div>
      </Container>
    </>
  )
}
