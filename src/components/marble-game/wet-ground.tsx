import { MeshReflectorMaterial, useTexture } from '@react-three/drei'
import { MeshProps } from '@react-three/fiber'
import { BoxGeometry, MeshStandardMaterial } from 'three'

export function WetGround() {
  const [floor, normal] = useTexture([
    '/textures/SurfaceImperfections003_1K_var1.jpg',
    '/textures/SurfaceImperfections003_1K_Normal.jpg'
  ])

  return (
    <>
      <mesh position={[0, -0.2, 0]} scale={[4, 0.2, 4]}>
        <boxGeometry />
        <MeshReflectorMaterial
          mirror={1}
          color='#f0f0f0'
          metalness={0}
          roughnessMap={floor}
          normalMap={normal}
          blur={[500, 100]}
          mixBlur={12}
          mixStrength={1.5}
          resolution={1024}
        />
      </mesh>
    </>
  )
}
