import { useFrame } from '@react-three/fiber'
import { RigidBody, RigidBodyApi } from '@react-three/rapier'
import { useRef, useState } from 'react'
import { BoxGeometry, Euler, MeshStandardMaterial, Quaternion, Vector3 } from 'three'

const boxGeometry = new BoxGeometry(1, 1, 1)

const obstacleMaterial = new MeshStandardMaterial({
  color: '#ff0000',
  metalness: 0,
  roughness: 1
})

type SpinnerProps = {
  lift: number
}

export function Spinner({ lift }: SpinnerProps) {
  const ref = useRef<RigidBodyApi>(null!)
  const [speed] = useState(() => (Math.random() + 0.2) * (Math.random() < 0.5 ? -1 : 1))

  useFrame((state) => {
    const time = state.clock.getElapsedTime()

    const rotation = new Quaternion()
    rotation.setFromEuler(new Euler(0, time * speed, 0))
    ref.current.setNextKinematicRotation(rotation)
  })

  return (
    <>
      <RigidBody
        ref={ref}
        position={[0, lift, 0]}
        type='kinematicPosition'
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
