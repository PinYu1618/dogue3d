import { CuboidCollider, RigidBody } from '@react-three/rapier'
import { BoxGeometry, MeshStandardMaterial } from 'three'

const geo = new BoxGeometry(1, 1, 1)
const mat = new MeshStandardMaterial({ color: '#ffedda', roughness: 0, metalness: 0 })

type WallProps = {
  length: number
}

function RightWall({ length }: WallProps) {
  return (
    <mesh
      position={[2.15, 0.75, -(length * 2) + 2]}
      scale={[0.3, 1.5, 4 * length]}
      geometry={geo}
      material={mat}
      castShadow
    />
  )
}

function LeftWall({ length }: WallProps) {
  return (
    <mesh
      position={[-2.15, 0.75, -(length * 2) + 2]}
      scale={[0.3, 1.5, 4 * length]}
      geometry={geo}
      material={mat}
      receiveShadow
    />
  )
}

function EndWall({ length }: WallProps) {
  return (
    <mesh
      position={[0, 0.75, -(length * 4) + 2]}
      scale={[4, 1.5, 0.3]}
      geometry={geo}
      material={mat}
      receiveShadow
    />
  )
}

export function Bounds({ length = 1 }) {
  return (
    <group>
      <RigidBody type='fixed' restitution={0.2} friction={0}>
        <RightWall length={length} />
        <LeftWall length={length} />
        <EndWall length={length} />
        <CuboidCollider
          args={[2, 0.1, 2 * length]}
          position={[0, -0.1, -(length * 2) + 2]}
          restitution={0.2}
          friction={1}
        />
      </RigidBody>
    </group>
  )
}
