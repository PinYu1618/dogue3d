import { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'
import { Level } from './level'
import Lights from './lights'
import Player from './player'

export function Scene() {
  return (
    <>
      <Suspense fallback={null}>
        <color args={['black']} attach='background' />

        <OrbitControls />

        <Level />
        <Lights />
        {/*<Player />*/}
      </Suspense>
    </>
  )
}
