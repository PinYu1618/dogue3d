import { Physics } from '@react-three/rapier'
import { Level } from './level'
import Lights from './lights'
import Player from './player'
import WetGround from './wet-ground'

export default function Game() {
  return (
    <>
      <Physics>
        <Level />
        <Lights />
        <Player />
        {/*<WetGround rotation={[-Math.PI / 2, 0, Math.PI / 2]} position-y={-0.8} />*/}
      </Physics>
    </>
  )
}
