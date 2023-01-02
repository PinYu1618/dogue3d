import { Bed, Books, Desk } from '@/components/room6'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

export default function Room6Page() {
  return (
    <>
      <Canvas>
        <ambientLight />
        <directionalLight />

        <OrbitControls />

        <Suspense fallback={null}>
          <Books />
          <Desk />
          <Bed />
        </Suspense>
      </Canvas>
    </>
  )
}
