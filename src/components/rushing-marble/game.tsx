import { Physics } from '@react-three/rapier'
import { Level } from './level'
import Lights from './lights'
import Player from './player'

export function MarbleGame() {
  return (
    <>
      <color args={['black']} attach='background' />

      <Physics>
        <Level />
        <Lights />
        <Player />
      </Physics>
    </>
  )
}
