import { useTexture, Reflector } from '@react-three/drei'

export default function WetGround(props) {
  const [floor, normal] = useTexture([
    '/textures/SurfaceImperfections003_1K_var1.jpg',
    '/textures/SurfaceImperfections003_1K_Normal.jpg'
  ])

  return (
    <Reflector
      mirror={1}
      resolution={1024}
      args={[8, 8]}
      blur={[500, 100]}
      mixBlur={12}
      mixStrength={1.5}
      {...props}
    >
      {(Material, props) => (
        <Material
          color='#f0f0f0'
          metalness={0}
          roughnessMap={floor}
          normalMap={normal}
          normalScale={[2, 2]}
          {...props}
        />
      )}
    </Reflector>
  )
}
