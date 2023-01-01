import * as THREE from 'three'
import { RigidBody } from '@react-three/rapier'
import { useMemo } from 'react'
import { Float, Text } from '@react-three/drei'
import { Axe, Limbo, Spinner } from './obstacles'
import { Ground } from './ground'
import { Bounds } from './bounds'

THREE.ColorManagement.legacyMode = false

type StartProps = {
  position?: [x: number, y: number, z: number]
}

function Start({ position = [0, 0, 0] }: StartProps) {
  return (
    <group position={position}>
      <Float floatIntensity={0.25} rotationIntensity={0.25}>
        <Text
          scale={4}
          maxWidth={0.25}
          lineHeight={0.75}
          textAlign='right'
          position={[0.75, 0.65, 0]}
          rotation-y={-0.25}
        >
          Marble Race
          <meshBasicMaterial toneMapped={false} />
        </Text>
      </Float>
    </group>
  )
}

type EndProps = {
  position?: [x: number, y: number, z: number]
}

function End({ position = [0, 0, 0] }: EndProps) {
  return (
    <group position={position}>
      <Text scale={8} position={[0, 2.25, 2]}>
        FINISH
        <meshBasicMaterial toneMapped={false} />
      </Text>
      <RigidBody
        type='fixed'
        colliders='hull'
        position={[0, 0.25, 0]}
        restitution={0.2}
        friction={0}
      >
        <boxGeometry />
      </RigidBody>
    </group>
  )
}

export function Level({ count = 5, types = [Spinner, Axe, Limbo], seed = 0 }) {
  const obstacles = useMemo(() => {
    const obstacles = []

    for (let i = 0; i < count; i++) {
      const type = types[Math.floor(Math.random() * types.length)]
      obstacles.push(type)
    }

    return obstacles
  }, [count, types, seed])

  return (
    <>
      <Start position={[0, 0, 0]} />

      {obstacles.map((Obstacle, index) => (
        <Obstacle key={index} position={[0, 0, -(index + 1) * 4]} />
      ))}

      <End position={[0, 0, -(count + 1) * 4]} />

      <Ground length={count + 2} />
      <Bounds length={count + 2} />
    </>
  )
}
