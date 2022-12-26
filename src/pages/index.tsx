import Container from '@/components/dom/container'
import { GamesList } from '@/components/dom/games-list'

export default function Index() {
  return (
    <>
      <button className='absolute right-8'>Login</button>
      <Container>
        <GamesList />
      </Container>
    </>
  )
}
