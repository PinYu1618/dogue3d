import { GraphQLError } from 'graphql'

import { createUser, findUserByName, validatePassword } from '@/lib/user'
import { getLoginSession, removeTokenCookie, setLoginSession } from '@/lib/auth'
import { GraphqlContext } from '@/pages/api/graphql'
import { SignupInput } from '@/interfaces'

export const resolvers = {
  Query: {
    async me(_root: unknown, _args: any, context: GraphqlContext) {
      try {
        const session = await getLoginSession(context.req)

        if (session) {
          const user = await findUserByName(session.name)
          if (!user) {
            return undefined
          } else {
            return { id: user.id, name: user.name, createdAt: user.createdAt }
          }
        }
      } catch (error) {
        throw new GraphQLError('Authentication token is invalid, please log in', {
          extensions: {
            code: 'UNAUTHENTICATED'
          }
        })
      }
    }
  },
  Mutation: {
    async signup(_parent: unknown, args: { input: SignupInput }, _context: GraphqlContext) {
      const user = await createUser(args.input.name, args.input.pswrd)
      if (!user) {
        return undefined
      } else {
        return { id: user.id, name: user.name, createdAt: user.createdAt }
      }
    },
    //@ts-ignore
    async login(_parent, args, context: GraphqlContext) {
      const user = await findUserByName(args.input.name)

      if (user && (await validatePassword(user, args.input.pswrd))) {
        const session = {
          //@ts-ignore
          id: user.id,
          //@ts-ignore
          name: user.name
        }

        await setLoginSession(context.res, session)

        return { id: user.id, name: user.name, createdAt: user.createdAt }
      }

      throw new GraphQLError('Invalid email and password combination')
    },
    async logout(_parent: unknown, _args: {}, context: GraphqlContext) {
      removeTokenCookie(context.res)
      return true
    }
  }
}
