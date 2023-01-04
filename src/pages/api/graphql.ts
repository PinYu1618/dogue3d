import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { NextApiRequest, NextApiResponse } from 'next'

import { schema } from '@/lib/graphql'

export type GraphqlContext = {
  req: NextApiRequest
  res: NextApiResponse
}

const apolloServer = new ApolloServer<GraphqlContext>({ schema })

export default startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => ({ req, res })
})
