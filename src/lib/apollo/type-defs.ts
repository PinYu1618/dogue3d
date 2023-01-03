import { gql } from '@apollo/client'

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    createdAt: Int!
  }

  input SignupInput {
    name: String!
    pswrd: String!
  }

  input LoginInput {
    name: String!
    pswrd: String!
  }

  type SignupPayload {
    user: User!
  }

  type LoginPayload {
    user: User!
  }

  type Query {
    me: User
  }

  type Mutation {
    signup(input: SignupInput!): SignupPayload!
    login(input: LoginInput!): LoginPayload!
    logout: Boolean!
  }
`
