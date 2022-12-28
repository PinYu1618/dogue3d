import { useStore } from '@/lib/store'

export default function useUser() {
  const { user } = useStore()
  return { user }
}
