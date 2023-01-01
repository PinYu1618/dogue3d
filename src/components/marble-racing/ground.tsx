import { MeshReflectorMaterial, Plane, useTexture } from '@react-three/drei'

export function Ground({ length = 1 }) {
  const [floor, normal] = useTexture([
    '/textures/SurfaceImperfections003_1K_var1.jpg',
    '/textures/SurfaceImperfections003_1K_Normal.jpg'
  ])

  return (
    <>
      <mesh
        position={[0, -0.1, -(length * 2) + 2]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[4, 4 * length, 1]}
      >
        <Plane>
          <MeshReflectorMaterial
            mirror={1}
            color='blue'
            metalness={0}
            roughnessMap={floor}
            normalMap={normal}
            blur={[500, 100]}
            mixBlur={12}
            mixStrength={1.5}
            resolution={1024}
          />
        </Plane>
      </mesh>
    </>
  )
}
