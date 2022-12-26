import { Canvas } from '@react-three/fiber'

export default function RushingBallPage() {
  return (
    <>
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
        <mesh>
          <boxGeometry />
          <meshBasicMaterial />
        </mesh>
      </Canvas>
    </>
  )
}
