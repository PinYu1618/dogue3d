import { GameCard } from '@/components/dom/game-card'

export function GamesList() {
  return (
    <ul id='game-list' className='flex flex-col sm:flex-row items-center gap-4'>
      <GameCard title='Rushing ball' href='/game/rush' description='Rushing ball description' />
      <GameCard title='Game 2' href='/' description='foo' />
    </ul>
  )
}
