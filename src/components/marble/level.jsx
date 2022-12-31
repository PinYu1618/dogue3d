import * as THREE from 'three'
import { RigidBody } from '@react-three/rapier'
import { useMemo } from 'react'
import { Float, Text } from '@react-three/drei'
import { Axe, Limbo, Spinner } from './obstacles'
import { Ground } from './ground'
import { Wall } from './wall'

THREE.ColorManagement.legacyMode = false

export function BlockStart({ position = [0, 0, 0] }) {
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

export function BlockEnd({ position = [0, 0, 0] }) {
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
  const blocks = useMemo(() => {
    const blocks = []

    for (let i = 0; i < count; i++) {
      const type = types[Math.floor(Math.random() * types.length)]
      blocks.push(type)
    }

    return blocks
  }, [count, types, seed])

  return (
    <>
      <BlockStart position={[0, 0, 0]} />

      {blocks.map((Block, index) => (
        <Block key={index} position={[0, 0, -(index + 1) * 4]} />
      ))}

      <BlockEnd position={[0, 0, -(count + 1) * 4]} />

      <Wall length={count + 2} />
      <Ground length={count + 2} />
    </>
  )
}
