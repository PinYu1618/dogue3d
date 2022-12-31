import { Box } from '@react-three/drei'
import { GroupProps, useFrame } from '@react-three/fiber'
import { RigidBody, RigidBodyApi } from '@react-three/rapier'
import { useRef, useState } from 'react'
import { Vector3 } from 'three'

export function Axe(props: GroupProps) {
  const axe = useRef<RigidBodyApi>(null)

  const [timeOffset] = useState(() => Math.random() * Math.PI * 2)

  useFrame((state) => {
    if (axe.current) {
      const time = state.clock.getElapsedTime()

      const x = Math.sin(time + timeOffset) * 1.25
      //axe.current.setNextKinematicTranslation({
      //  x: pos.x + x,
      //  y: pos.y + 0.75,
      //  z: pos.z
      //})
    }
  })

  return (
    <group {...props}>
      <RigidBody
        ref={axe}
        type='kinematicPosition'
        position={[0, 0.3, 0]}
        restitution={0.2}
        friction={0}
      >
        <Box scale={[1.5, 1.5, 0.3]} castShadow receiveShadow></Box>
      </RigidBody>
    </group>
  )
}
