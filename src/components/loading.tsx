import { useProgress } from '@react-three/drei'

export default function Loading() {
  const { active, progress } = useProgress()
  return active ? (
    <div>
      <span>{Math.floor(progress)}%</span>
    </div>
  ) : null
}
