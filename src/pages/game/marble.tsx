import Layout from '@/components/layout'
import { MarbleRacing } from '@/components/marble-racing'
import { useStore } from '@/lib/store'

export default function MarbleRacingPagge() {
  //const inGame = useStore((state) => state.inGame)

  //return inGame ? <MarbleRacing /> : <Layout></Layout>
  return <MarbleRacing />
}
