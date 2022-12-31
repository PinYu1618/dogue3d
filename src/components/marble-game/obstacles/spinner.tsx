import { Box } from '@react-three/drei'
import { GroupProps, useFrame } from '@react-three/fiber'
import { RigidBody, RigidBodyApi } from '@react-three/rapier'
import { useRef, useState } from 'react'
import { Euler, Quaternion } from 'three'

export function Spinner(props: GroupProps) {
  const spinner = useRef<RigidBodyApi>(null)
  const [speed] = useState(() => (Math.random() + 0.2) * (Math.random() < 0.5 ? -1 : 1))

  useFrame((state) => {
    if (spinner.current) {
      const time = state.clock.getElapsedTime()

      const rotation = new Quaternion().setFromEuler(new Euler(0, time * speed, 0))
      spinner.current.setNextKinematicRotation(rotation)
    }
  })

  return (
    <group {...props}>
      <RigidBody
        ref={spinner}
        position={[0, 0.3, 0]}
        type='kinematicPosition'
        restitution={0.2}
        friction={0}
      >
        <Box scale={[3.5, 0.3, 0.3]} castShadow receiveShadow></Box>
      </RigidBody>
    </group>
  )
}
