import { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'
import { Level } from './level'
import Player from './player'

export function Scene() {
  return (
    <>
      <Suspense fallback={null}>
        <color args={['black']} attach='background' />
        <ambientLight />

        <OrbitControls />

        <Level />
        {/*<Player />*/}
      </Suspense>
    </>
  )
}
