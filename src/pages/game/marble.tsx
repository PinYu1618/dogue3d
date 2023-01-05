import { MarbleRacing } from '@/components/marble-racing'
import { useMarbleRacing } from '@/hooks/use-marble'

export default function MarbleRacingPagge() {
  //const inGame = useStore((state) => state.inGame)

  //return inGame ? <MarbleRacing /> : <Layout></Layout>
  const blocks = useMarbleRacing((state) => state.blocks)

  return <MarbleRacing blocks={blocks} />
}
