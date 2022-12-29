import RushGame from '@/components/game/rush'
import Introduction from '@/components/game/rush/introduction'
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
          <color args={['black']} attach='background' />
          <Suspense fallback={null}>
            <RushGame />
          </Suspense>
        </Canvas>
        <Introduction />
      </KeyboardControls>
    </>
  )
}
