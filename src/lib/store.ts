import { useLayoutEffect } from 'react'
import create, { UseBoundStore } from 'zustand'
import createContext from 'zustand/context'
import { combine } from 'zustand/middleware'

let store: any

type InitialState = ReturnType<typeof getDefaultInitialState>
type UseStoreState = typeof initializeStore extends (...args: never) => UseBoundStore<infer T>
  ? T
  : never

const getDefaultInitialState = () => ({
  user: null,
  lastUpdate: Date.now(),
  light: false,
  count: 0
})

const zustandContext = createContext<UseStoreState>()
export const Provider = zustandContext.Provider
export const useStore = zustandContext.useStore

export const initializeStore = (preloadedState = {}) => {
  return create(
    combine({ ...getDefaultInitialState(), ...preloadedState }, (set, get) => ({
      reset2: () => {
        set({ count: 100 })
      },
      tick: (lastUpdate: number, light: boolean) => {
        set({
          lastUpdate,
          light: !!light
        })
      },
      increment: () => {
        set({
          count: get().count + 1
        })
      },
      decrement: () => {
        set({
          count: get().count - 1
        })
      },
      reset: () => {
        set({
          count: getDefaultInitialState().count
        })
      }
    }))
  )
}

export const useCreateStore = (serverInitialState: InitialState) => {
  // For SSR & SSG, always use a new store.
  if (typeof window === 'undefined') {
    return () => initializeStore(serverInitialState)
  }

  const isReusingStore = Boolean(store)
  store = store ?? initializeStore(serverInitialState)
  // And if initialState changes, then merge states in the next render cycle.
  //
  // eslint complaining "React Hooks must be called in the exact same order in every component render"
  // is ignorable as this code runs in same order in a given environment
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useLayoutEffect(() => {
    if (serverInitialState && isReusingStore) {
      store.setState({ ...store.getState(), ...serverInitialState }, true)
    }
  })

  return () => store
}
