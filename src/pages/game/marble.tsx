import { MarbleRacing } from '@/components/marble-racing'
import { useLeavePageConfirm } from '@/hooks/use-leave'
import { useMarbleRacing } from '@/hooks/use-marble'

export default function MarbleRacingPagge() {
  //const inGame = useStore((state) => state.inGame)

  //return inGame ? <MarbleRacing /> : <Layout></Layout>
  const blocks = useMarbleRacing((state) => state.blocks)
  const cleanup = useMarbleRacing((state) => state.restart)

  useLeavePageConfirm(cleanup)

  return <MarbleRacing blocks={blocks} />
}
