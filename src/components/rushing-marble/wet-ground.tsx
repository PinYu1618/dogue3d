import { BoxGeometry, MeshStandardMaterial } from 'three'

const boxGeometry = new BoxGeometry(1, 1, 1)

const floor2Material = new MeshStandardMaterial({
  color: '#222222',
  metalness: 0,
  roughness: 0
})

export function WetGround() {
  return (
    <>
      <mesh
        geometry={boxGeometry}
        material={floor2Material}
        position={[0, -0.1, 0]}
        scale={[4, 0.2, 4]}
        receiveShadow
      />
    </>
  )
}
