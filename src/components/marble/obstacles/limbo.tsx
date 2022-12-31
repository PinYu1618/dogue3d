import { Box } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { RigidBody, RigidBodyApi } from '@react-three/rapier'
import { useRef, useState } from 'react'

type LimboProps = {
  position?: [x: number, y: number, z: number]
}

export function Limbo({ position = [0, 0, 0] }: LimboProps) {
  const limbo = useRef<RigidBodyApi>(null)
  const [timeOffset] = useState(() => Math.random() * Math.PI * 2)

  useFrame((state) => {
    if (limbo.current) {
      const time = state.clock.getElapsedTime()

      const y = Math.sin(time + timeOffset) + 1.15
      limbo.current.setNextKinematicTranslation({
        x: position[0],
        y: position[1] + y,
        z: position[2]
      })
    }
  })

  return (
    <group position={position}>
      <RigidBody
        ref={limbo}
        type='kinematicPosition'
        position={[0, 0.3, 0]}
        restitution={0.2}
        friction={0}
      >
        <Box scale={[3.5, 0.3, 0.3]} castShadow receiveShadow>
          <meshStandardMaterial />
        </Box>
      </RigidBody>
    </group>
  )
}
