/*
Initially auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useEffect, useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type TrackGltf = GLTF & {
  nodes: {
    ['Street003_-_applied_transform']: THREE.Mesh
  }
  materials: {}
}

export function Track() {
  const { nodes } = useGLTF('/models/track.glb') as unknown as TrackGltf
  const colorMap = useTexture('/textures/car-racing/track.png')

  useEffect(() => {
    colorMap.anisotropy = 16
  }, [colorMap])

  return (
    <group>
      <mesh geometry={nodes['Street003_-_applied_transform'].geometry}>
        <meshBasicMaterial map={colorMap} toneMapped={false} />
      </mesh>
    </group>
  )
}
