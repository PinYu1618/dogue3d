import { makeExecutableSchema } from '@graphql-tools/schema'

import { resolvers } from './resolvers'
import { typeDefs } from './type-defs'

export { getErrorMessage } from './get-error-msg'

export const schema = makeExecutableSchema({ typeDefs, resolvers })
