import { KeyboardControls, KeyboardControlsEntry } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import { Suspense, useMemo } from 'react'

import { GameUi } from './game-ui'
import { Level } from './level'
import { Lights } from './lights'
import { Controls, Marble } from './marble'

type MarbleRacingProps = {
  blocks?: number
}

export function MarbleRacing({ blocks }: MarbleRacingProps) {
  const map = useMemo<KeyboardControlsEntry<Controls>[]>(
    () => [
      { name: Controls.forward, keys: ['ArrowUp', 'w', 'W'] },
      { name: Controls.back, keys: ['ArrowDown', 's', 'S'] },
      { name: Controls.left, keys: ['ArrowLeft', 'a', 'A'] },
      { name: Controls.right, keys: ['ArrowRight', 'd', 'D'] },
      { name: Controls.jump, keys: ['Space'] }
    ],
    []
  )

  return (
    <>
      <KeyboardControls map={map}>
        <Canvas
          shadows
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [2.5, 4, 6]
          }}
        >
          <Suspense fallback={null}>
            <color args={['black']} attach='background' />

            <Physics>
              <Marble />
              <Level count={blocks} />

              {/*<Debug />*/}
            </Physics>

            <Lights />
          </Suspense>
        </Canvas>
        <GameUi />
      </KeyboardControls>
    </>
  )
}
