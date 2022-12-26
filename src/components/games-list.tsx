import { PropsWithChildren } from 'react'
import { GameCard } from './game-card'

type GamesRowProps = {
  title: string
}

function GamesRow({ title, children }: PropsWithChildren<GamesRowProps>) {
  return (
    <div>
      <h2>{title}</h2>
      <ul>{children}</ul>
    </div>
  )
}

export function GamesList() {
  return (
    <div>
      <GamesRow title='Games Row Title1'>
        <GameCard title='Rushing ball' href='/game/rush' description='Rushing ball description' />
      </GamesRow>
    </div>
  )
}
