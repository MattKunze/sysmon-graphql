import { gql } from "apollo-server-micro"

export default gql`
  type HostInfo {
    arch: String!
    hostname: String!
    platform: String!
    release: String!
    type: String!
    uptime: Int!
    version: String!
  }

  type Query {
    hostInfo: HostInfo!
  }
`
