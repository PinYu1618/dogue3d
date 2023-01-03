import create from 'zustand'

type State = {
  phase: 'ready' | 'playing' | 'ended'
  startTime: number | null
  endTime: number | null
  seed: number
  blocks: number
}

interface Action {
  start: () => void
  end: () => void
  restart: () => void
}

const getInitialState = () => {
  return {
    phase: 'ready' as const,
    startTime: null,
    endTime: null,
    seed: Math.random(),
    blocks: 10
  }
}

export const useMarbleRacing = create<State & Action>((set, get) => ({
  ...getInitialState(),
  start: () => set({ phase: 'playing', startTime: Date.now() }),
  end: () => set({ phase: 'ended', endTime: Date.now() }),
  restart: () => set(getInitialState())
}))
