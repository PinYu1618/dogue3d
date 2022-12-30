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

type LimboProps = {
  pos: Vector3
  lift: number
}

export function Limbo({ pos, lift }: LimboProps) {
  const ref = useRef<RigidBodyApi>(null!)
  const [timeOffset] = useState(() => Math.random() * Math.PI * 2)

  useFrame((state) => {
    const time = state.clock.getElapsedTime()

    const y = Math.sin(time + timeOffset) + 1.15
    ref.current.setNextKinematicTranslation({
      x: pos.x,
      y: pos.y + y,
      z: pos.z
    })
  })

  return (
    <>
      <RigidBody
        ref={ref}
        type='kinematicPosition'
        position={[0, lift, 0]}
        restitution={0.2}
        friction={0}
      >
        <mesh
          geometry={boxGeometry}
          material={obstacleMaterial}
          scale={[3.5, 0.3, 0.3]}
          castShadow
          receiveShadow
        />
      </RigidBody>
    </>
  )
}
