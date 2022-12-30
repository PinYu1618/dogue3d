import { useGLTF, useTexture } from '@react-three/drei'
import { useEffect } from 'react'

export function Track() {
  const gltf = useGLTF('/models/track.glb')
  const colorMap = useTexture('/textures/car-racing/track.png')

  useEffect(() => {
    colorMap.anisotropy = 16
  }, [colorMap])

  let geo = gltf.scene

  return (
    <>
      <mesh>
        <primitive object={geo} />
        <meshBasicMaterial map={colorMap} />
      </mesh>
    </>
  )
}
