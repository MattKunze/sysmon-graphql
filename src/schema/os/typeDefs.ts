import { gql } from "apollo-server-micro"

export default gql`
  type HostInfo {
    arch: String!
    cpuCount: Int!
    hostname: String!
    platform: String!
    release: String!
    type: String!
    uptime: Int!
    version: String!
  }
  type MemoryInfo {
    total: String!
    percentFree: Int!
  }

  type Query {
    hostInfo: HostInfo!
    loadAverage: [Float]!
    memoryInfo: MemoryInfo!
  }
`
