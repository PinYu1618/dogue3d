import { User } from '@/interfaces'
import create from 'zustand'

type State = {
  user: User | null
}

interface Action {
  signup: (name: string, pswrd: string) => void
  login: (name: string, pswrd: string) => void
  logout: () => void
}

const initialState: State = {
  user: null
}

export const useUser = create<State & Action>((set, get) => ({
  ...initialState,
  signup: async (name, pswrd) => {
    const data = { name, pswrd }
    const endpoint = '/api/user'
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }
    const response = await fetch(endpoint, options)
    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    set(() => ({ user: { name: result.data.user.name } }))
  },
  login: async (name, pswrd) => {
    const data = { name, pswrd }
    const endpoint = '/api/user'
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }
    const response = await fetch(endpoint, options)
    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    set(() => ({ user: { name: result.data.user.name } }))
  },
  logout: () => set(() => ({ user: initialState.user }))
}))
