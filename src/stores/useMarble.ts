import create from 'zustand'

type State = {
  phase: 'ready' | 'playing' | 'ended'
  startTime: number
  endTime: number | null
  blocksSeed: number
}

interface Action {
  start: () => void
  end: () => void
  restart: () => void
}

const getInitialState = () => {
  return {
    phase: 'ready' as const,
    startTime: Date.now(),
    endTime: null,
    blocksSeed: Math.random()
  }
}

export const useMarble = create<State & Action>((set, get) => ({
  ...getInitialState(),
  start: () => {},
  end: () => {},
  restart: () => {}
}))
