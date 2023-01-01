import { Suspense } from 'react'
import { extend } from '@react-three/fiber'
import { Debug, Physics } from '@react-three/rapier'
import { KernelSize } from 'postprocessing'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import { UnrealBloomPass } from 'three-stdlib'

import { Level } from './level'
import { Marble } from './marble'

extend({ UnrealBloomPass })

export function World() {
  return (
    <>
      <Suspense fallback={null}>
        <color args={['black']} attach='background' />
        <ambientLight />

        <Physics>
          <Marble />
          <Level />

          {/*<Debug />*/}
        </Physics>
      </Suspense>
    </>
  )
}
