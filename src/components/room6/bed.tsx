/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    MeshBed002: THREE.Mesh
    MeshBed002_1: THREE.Mesh
    MeshBedCover002: THREE.Mesh
    MeshBedCover002_1: THREE.Mesh
    Pillow1001: THREE.Mesh
    Pillow2001: THREE.Mesh
  }
  materials: {
    ['carpetWhite.002']: THREE.MeshStandardMaterial
    Wood: THREE.MeshStandardMaterial
    ['carpet.002']: THREE.MeshStandardMaterial
    MatPillow: THREE.MeshStandardMaterial
  }
}

export function Bed(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/models/room6/bed.glb') as unknown as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group position={[-0.39, 0, 1.07]} scale={3.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MeshBed002.geometry}
          material={materials['carpetWhite.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MeshBed002_1.geometry}
          material={materials.Wood}
        />
        <group rotation={[0, -Math.PI / 2, 0]} scale={0.5}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MeshBedCover002.geometry}
            material={materials['carpet.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.MeshBedCover002_1.geometry}
            material={materials['carpetWhite.002']}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pillow1001.geometry}
          material={materials.MatPillow}
          position={[0.69, 0.25, -0.98]}
          rotation={[-0.47, 0, 0]}
          scale={[0.21, 0.15, 0.15]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pillow2001.geometry}
          material={materials.MatPillow}
          position={[0.69, 0.29, -0.87]}
          scale={[0.21, 0.15, 0.15]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/room6/bed.glb')