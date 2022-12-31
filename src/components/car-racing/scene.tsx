import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Suspense } from 'react'
import { Car } from './car'
import { Ground } from './ground'
import { Track } from './track'

export function Scene() {
  return (
    <>
      <Suspense fallback={null}>
        <Environment files={'/textures/car-racing/envmap.hdr'} background={true} />

        <PerspectiveCamera makeDefault position={[-6, 3.9, 6.21]} fov={40} />
        <OrbitControls target={[-2.64, -0.71, 0.03]} />

        <Car />
        <Track />
        <Ground />
      </Suspense>
    </>
  )
}