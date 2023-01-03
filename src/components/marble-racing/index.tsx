import { KeyboardControls, KeyboardControlsEntry } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useMemo } from 'react'
import { GameUi } from './game-ui'

import { Controls } from './marble'
import { World } from './world'

export function MarbleRacing() {
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
          <World />
        </Canvas>
        <GameUi />
      </KeyboardControls>
    </>
  )
}
