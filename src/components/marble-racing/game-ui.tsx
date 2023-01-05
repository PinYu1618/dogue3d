import { useEffect, useRef, useState } from 'react'
import { useKeyboardControls } from '@react-three/drei'

import { useMarbleRacing } from '@/hooks/use-marble'
import useInterval from '@/hooks/use-interval'
import { addEffect } from '@react-three/fiber'

function Time() {
  const [time, setTime] = useState('0.00')

  useEffect(() => {
    const unsubscribeEffect = addEffect(() => {
      const state = useMarbleRacing.getState()

      let elapsedTime = 0

      if (state.phase === 'playing' && state.startTime) {
        elapsedTime = Date.now() - state.startTime
      } else if (state.phase === 'ended' && state.endTime && state.startTime) {
        elapsedTime = state.endTime - state.startTime
      }

      setTime((elapsedTime / 1000).toFixed(2))
    })

    return () => {
      unsubscribeEffect()
    }
  }, [])

  return (
    <div className='absolute top-[15%] left-0 w-full pt-[5px] text-center text-[6vh] text-white bg-[#00000033]'>
      {time}
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
  const phase = useMarbleRacing((state) => state.phase)
  const startTime = useMarbleRacing((state) => state.startTime)

  const forward = useKeyboardControls((state) => state.forward)
  const backward = useKeyboardControls((state) => state.backward)
  const leftward = useKeyboardControls((state) => state.leftward)
  const rightward = useKeyboardControls((state) => state.rightward)
  const jump = useKeyboardControls((state) => state.jump)

  /**/

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
