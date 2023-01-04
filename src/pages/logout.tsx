import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { gql, useMutation, useApolloClient } from '@apollo/client'

const LogoutMutation = gql`
  mutation LogoutMutation {
    logout
  }
`

export default function LogoutPage() {
  const client = useApolloClient()
  const router = useRouter()
  const [logout] = useMutation(LogoutMutation)

  useEffect(() => {
    logout().then(() => {
      client.resetStore().then(() => {
        router.push('/login')
      })
    })
  }, [logout, router, client])

  return <p>Signing out...</p>
}
