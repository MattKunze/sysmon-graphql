import { gql } from "apollo-server-micro"

const typeDefs = gql`
  type Query {
    ping: String!
  }
`

export default typeDefs
