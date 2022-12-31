import { Box } from '@react-three/drei'
import { GroupProps, useFrame } from '@react-three/fiber'
import { RigidBody, RigidBodyApi } from '@react-three/rapier'
import { useRef, useState } from 'react'
import { Vector3 } from 'three'

export function Limbo(props: GroupProps) {
  const limbo = useRef<RigidBodyApi>(null)
  const [timeOffset] = useState(() => Math.random() * Math.PI * 2)

  useFrame((state) => {
    if (limbo.current) {
      const time = state.clock.getElapsedTime()

      const y = Math.sin(time + timeOffset) + 1.15
      //limbo.current.setNextKinematicTranslation({
      //  x: position.x,
      //  y: position.y + y,
      //  z: position.z
      //})
    }
  })

  return (
    <group {...props}>
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
