import { Canvas } from '@react-three/fiber'
import Level from './level'
import Lights from './lights'

export default function RushGame() {
  return (
    <Canvas
      shadows
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [2.5, 4, 6]
      }}
    >
      <color args={['#252731']} attach='background' />
      <Level />
      <Lights />
    </Canvas>
  )
}
