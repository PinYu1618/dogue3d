import create from 'zustand'

type State = {
  inGame: boolean
}

interface Action {
  enterGame: () => void
  exitGame: () => void
}

const initialState: State = { inGame: false }

export const useStore = create<State & Action>((set) => ({
  ...initialState,
  enterGame: () => set({ inGame: true }),
  exitGame: () => set({ inGame: false })
}))
