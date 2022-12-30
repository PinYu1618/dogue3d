import { useGLTF } from '@react-three/drei'
import { useEffect } from 'react'

export function Car() {
  // thanks to the_86_guy!
  // https://sketchfab.com/3d-models/low-poly-car-muscle-car-2-ac23acdb0bd54ab38ea72008f3312861
  let mesh = useGLTF('/models/car.glb').scene

  useEffect(() => {
    mesh.scale.set(0.0012, 0.0012, 0.0012)
    mesh.children[0].position.set(-365, -18, -67)
  }, [mesh])

  return (
    <>
      <primitive object={mesh} />
    </>
  )
}
