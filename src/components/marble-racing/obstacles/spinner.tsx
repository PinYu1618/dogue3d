import { Box } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { RigidBody, RigidBodyApi } from '@react-three/rapier'
import { useRef, useState } from 'react'
import { Euler, Quaternion } from 'three'

type SpinnerProps = {
  position?: [x: number, y: number, z: number]
}

export function Spinner({ position = [0, 0, 0] }: SpinnerProps) {
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
    <group position={position}>
      <RigidBody
        ref={spinner}
        position={[0, 0.3, 0]}
        type='kinematicPosition'
        restitution={0.2}
        friction={0}
      >
        <Box scale={[3.5, 0.3, 0.3]} castShadow receiveShadow>
          <meshStandardMaterial color='#3df2ff' metalness={0} roughness={1} />
        </Box>
      </RigidBody>
    </group>
  )
}
