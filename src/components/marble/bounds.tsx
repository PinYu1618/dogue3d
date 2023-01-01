import { Box } from '@react-three/drei'
import { CuboidCollider, RigidBody } from '@react-three/rapier'

export function Bounds({ length = 1 }) {
  return (
    <group>
      <RigidBody type='fixed' restitution={0.2} friction={0}>
        {/* right wall */}
        <Box position={[2.15, 0.75, -(length * 2) + 2]} scale={[0.3, 1.5, 4 * length]} castShadow>
          <meshPhysicalMaterial />
        </Box>
        {/* left wall */}
        <Box
          position={[-2.15, 0.75, -(length * 2) + 2]}
          scale={[0.3, 1.5, 4 * length]}
          receiveShadow
        >
          <meshPhysicalMaterial />
        </Box>
        {/* wall at ending */}
        <Box position={[0, 0.75, -(length * 4) + 2]} scale={[4, 1.5, 0.3]} receiveShadow>
          <meshPhysicalMaterial />
        </Box>
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
