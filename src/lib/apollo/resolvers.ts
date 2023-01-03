import { GraphQLError } from 'graphql'

import { createUser, findUser, validatePassword } from '@/lib/user'
import { getLoginSession, setLoginSession } from '@/lib/auth'
import { removeTokenCookie } from '@/lib/auth'

export const resolvers = {
  Query: {
    //@ts-ignore
    async me(_root, _args, context, _info) {
      try {
        const session = await getLoginSession(context.req)

        if (session) {
          return findUser({ name: session.name })
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
    //@ts-ignore
    async signup(_parent, args, _context, _info) {
      const user = await createUser(args.input)
      return { user }
    },
    //@ts-ignore
    async login(_parent, args, context, _info) {
      const user = await findUser({ name: args.input.name })

      if (user && (await validatePassword(user, args.input.pswrd))) {
        const session = {
          id: user.id,
          name: user.name
        }

        await setLoginSession(context.res, session)

        return { user }
      }

      throw new GraphQLError('Invalid email and password combination')
    },
    //@ts-ignore
    async logout(_parent, _args, context, _info) {
      removeTokenCookie(context.res)
      return true
    }
  }
}
