import { useMarbleRacing } from '@/stores/useMarbleRacing'
import { useKeyboardControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRapier, RigidBody, RigidBodyApi } from '@react-three/rapier'
import { useEffect, useRef, useState } from 'react'
import { Vector3 } from 'three'

export enum Controls {
  forward = 'forward',
  back = 'back',
  left = 'left',
  right = 'right',
  jump = 'jump'
}

export function Marble() {
  const marble = useRef<RigidBodyApi>(null)

  const [_sub, get] = useKeyboardControls<Controls>()
  const jumpPressed = useKeyboardControls<Controls>((state) => state.jump)
  const [blocks, phase, start, end, restart] = useMarbleRacing((state) => [
    state.blocks,
    state.phase,
    state.start,
    state.end,
    state.restart
  ])
  const { rapier, world } = useRapier()
  const rapierWorld = world.raw()

  const [smoothedCameraPosition] = useState(() => new Vector3(10, 10, 10))
  const [smoothedCameraTarget] = useState(() => new Vector3())

  const jump = () => {
    if (marble.current) {
      console.log('[player] Jumped!')
      const origin = marble.current.translation()
      origin.y -= 0.31
      const direction = { x: 0, y: -1, z: 0 }
      const hit = rapierWorld.castRay(new rapier.Ray(origin, direction), 10, true)
      if (hit && hit.toi < 0.15) {
        marble.current.applyImpulse({ x: 0, y: 0.5, z: 0 })
      }
    }
  }

  const reset = () => {
    if (marble.current) {
      console.log('[player] Reseted!')
      marble.current.setTranslation({ x: 0, y: 1, z: 0 })
      marble.current.setLinvel({ x: 0, y: 0, z: 0 })
      marble.current.setAngvel({ x: 0, y: 0, z: 0 })
    }
  }

  useEffect(() => {
    start()
  }, [])

  useEffect(() => {
    if (jumpPressed) {
      jump()
    }
  }, [jumpPressed])

  useEffect(() => {
    if (phase === 'ready') {
      reset()
    }
  }, [phase])

  useFrame((state, delta) => {
    if (marble.current) {
      /* Update marble position */
      const impulse = { x: 0, y: 0, z: 0 }
      const torque = { x: 0, y: 0, z: 0 }

      const impulseStrength = 0.6 * delta
      const torqueStrength = 0.2 * delta

      if (get().forward) {
        impulse.z -= impulseStrength
        torque.x -= torqueStrength
      }
      if (get().left) {
        impulse.x -= impulseStrength
        torque.z += torqueStrength
      }
      if (get().right) {
        impulse.x += impulseStrength
        torque.z -= torqueStrength
      }
      if (get().back) {
        impulse.z += impulseStrength
        torque.x += torqueStrength
      }

      marble.current.applyImpulse(impulse)
      marble.current.applyTorqueImpulse(torque)

      /* Update camera position */
      const marblePosition = marble.current.translation()

      const cameraPosition = new Vector3().copy(marblePosition)
      cameraPosition.z += 2.25
      cameraPosition.y += 0.65

      const cameraTarget = new Vector3().copy(marblePosition)
      cameraTarget.y += 0.25

      smoothedCameraPosition.lerp(cameraPosition, 5 * delta)
      smoothedCameraTarget.lerp(cameraTarget, 5 * delta)
      state.camera.position.copy(smoothedCameraPosition)
      state.camera.lookAt(smoothedCameraTarget)

      if (marblePosition.z < -(blocks * 4 + 2)) {
        end()
      }
      if (marblePosition.y < -4) {
        restart()
      }
    }
  })

  return (
    <>
      <RigidBody
        ref={marble}
        colliders='ball'
        restitution={0.2}
        friction={1}
        linearDamping={0.5}
        angularDamping={0.5}
        position={[0, 1, 0]}
      >
        <mesh castShadow>
          <icosahedronGeometry args={[0.3, 1]} />
          <meshStandardMaterial flatShading color='mediumpurple' />
        </mesh>
      </RigidBody>
    </>
  )
}
