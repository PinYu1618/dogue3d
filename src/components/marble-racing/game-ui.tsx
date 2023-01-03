import { useEffect, useRef } from 'react'
import { addEffect } from '@react-three/fiber'
import { useKeyboardControls } from '@react-three/drei'

import { useMarbleRacing } from '@/stores/useMarbleRacing'

function Time() {
  return (
    <div className='absolute top-[15%] left-0 w-full pt-[5px] text-center text-[6vh] text-white bg-[#00000033]'>
      0.00
    </div>
  )
}

function RestartButton() {
  const restart = useMarbleRacing((state) => state.restart)

  return (
    <div
      className='absolute top-[40%] left-0 w-full flex justify-center pt-2.5 text-white text-[80px] cursor-pointers pointer-events-auto bg-[#00000033]'
      onClick={restart}
    >
      Restart
    </div>
  )
}

export function GameUi() {
  const time = useRef()

  const phase = useMarbleRacing((state) => state.phase)

  const forward = useKeyboardControls((state) => state.forward)
  const backward = useKeyboardControls((state) => state.backward)
  const leftward = useKeyboardControls((state) => state.leftward)
  const rightward = useKeyboardControls((state) => state.rightward)
  const jump = useKeyboardControls((state) => state.jump)

  /*useEffect(() => {
    const unsubscribeEffect = addEffect(() => {
      const state = useMarbleRacing.getState()

      let elapsedTime = 0

      if (state.phase === 'playing') elapsedTime = Date.now() - state.startTime
      else if (state.phase === 'ended') elapsedTime = state.endTime - state.startTime

      elapsedTime /= 1000
      elapsedTime = elapsedTime.toFixed(2)

      if (time.current) time.current.textContent = elapsedTime
    })

    return () => {
      unsubscribeEffect()
    }
  }, [])*/

  return (
    <div className='fixed top-0 left-0 w-full h-full pointer-events-none'>
      <Time />
      {phase === 'ended' && <RestartButton />}

      {/* Controls */}
      <div className='absolute bottom-[10%]'>
        <div className='raw'>
          <div className={`key ${forward ? 'active' : ''}`}></div>
        </div>
        <div className='raw'>
          <div className={`key ${leftward ? 'active' : ''}`}></div>
          <div className={`key ${backward ? 'active' : ''}`}></div>
          <div className={`key ${rightward ? 'active' : ''}`}></div>
        </div>
        <div className='raw'>
          <div className={`key large ${jump ? 'active' : ''}`}></div>
        </div>
      </div>
    </div>
  )
}
