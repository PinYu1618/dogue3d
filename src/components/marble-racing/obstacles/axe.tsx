import { Box } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { RigidBody, RigidBodyApi } from '@react-three/rapier'
import { useRef, useState } from 'react'

type AxeProps = {
  position?: [x: number, y: number, z: number]
}

export function Axe({ position = [0, 0, 0] }: AxeProps) {
  const axe = useRef<RigidBodyApi>(null)

  const [timeOffset] = useState(() => Math.random() * Math.PI * 2)

  useFrame((state) => {
    if (axe.current) {
      const time = state.clock.getElapsedTime()

      const x = Math.sin(time + timeOffset) * 1.25
      axe.current.setNextKinematicTranslation({
        x: position[0] + x,
        y: position[1] + 0.75,
        z: position[2]
      })
    }
  })

  return (
    <group position={position}>
      <RigidBody
        ref={axe}
        type='kinematicPosition'
        position={[0, 0.3, 0]}
        restitution={0.2}
        friction={0}
      >
        <Box scale={[1.5, 1.5, 0.3]}>
          <meshStandardMaterial roughness={1} metalness={0} color='#ff2442' />
        </Box>
      </RigidBody>
    </group>
  )
}
