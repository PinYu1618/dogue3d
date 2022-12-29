import { Physics } from '@react-three/rapier'
import { Level } from './level'
import Lights from './lights'
import Player from './player'
import WetGround from './wet-ground'

export default function Game() {
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
