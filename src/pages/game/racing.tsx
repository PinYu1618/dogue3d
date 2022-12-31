import { Scene } from '@/components/racing'
import { Canvas } from '@react-three/fiber'

export default function CarRacingPage() {
  return (
    <>
      <Canvas>
        <Scene />
      </Canvas>
    </>
  )
}
