import { MarbleGame } from '@/components/rushing-marble'
import Introduction from '@/components/rushing-marble/introduction'
import { KeyboardControls, KeyboardControlsEntry } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense, useMemo } from 'react'

enum Controls {
  forward = 'forward',
  back = 'back',
  left = 'left',
  right = 'right',
  jump = 'jump'
}

export default function RushingMarble() {
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
            <MarbleGame />
          </Suspense>
        </Canvas>
        <Introduction />
      </KeyboardControls>
    </>
  )
}
