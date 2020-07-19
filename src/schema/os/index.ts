import { buildSchema } from "type-graphql"

import { HostInfoResolver } from "./hostInfo"
import { LoadAverageResolver } from "./loadAverage"
import { MemoryInfoResolver } from "./memoryInfo"

export default buildSchema({
  resolvers: [HostInfoResolver, LoadAverageResolver, MemoryInfoResolver],
})
