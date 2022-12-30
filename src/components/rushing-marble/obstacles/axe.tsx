import { useFrame } from '@react-three/fiber'
import { RigidBody, RigidBodyApi } from '@react-three/rapier'
import { useRef, useState } from 'react'
import { BoxGeometry, MeshStandardMaterial, Vector3 } from 'three'

const boxGeometry = new BoxGeometry(1, 1, 1)

const obstacleMaterial = new MeshStandardMaterial({
  color: '#ff0000',
  metalness: 0,
  roughness: 1
})

type AxeProps = {
  pos: Vector3
}

export function Axe({ pos }: AxeProps) {
  const ref = useRef<RigidBodyApi>(null!)

  const [timeOffset] = useState(() => Math.random() * Math.PI * 2)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()

    const x = Math.sin(time + timeOffset) * 1.25
    ref.current.setNextKinematicTranslation({
      x: pos.x + x,
      y: pos.y + 0.75,
      z: pos.z
    })
  })

  return (
    <>
      <RigidBody
        ref={ref}
        type='kinematicPosition'
        position={[0, 0.3, 0]}
        restitution={0.2}
        friction={0}
      >
        <mesh
          geometry={boxGeometry}
          material={obstacleMaterial}
          scale={[1.5, 1.5, 0.3]}
          castShadow
          receiveShadow
        />
      </RigidBody>
    </>
  )
}
