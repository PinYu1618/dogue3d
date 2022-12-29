import RushGame from '@/components/rush-game'
import Introduction from '@/components/rush-game/introduction'
import { KeyboardControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

export default function RushPage() {
  return (
    <>
      <KeyboardControls
        map={[
          { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
          { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
          { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
          { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
          { name: 'jump', keys: ['Space'] }
        ]}
      >
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
            <RushGame />
          </Suspense>
        </Canvas>
        <Introduction />
      </KeyboardControls>
    </>
  )
}
