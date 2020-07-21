import { buildSchema } from "type-graphql"

import { CpuUsageResolver } from "./cpuUsage"
import { HostInfoResolver } from "./hostInfo"
import { LoadAverageResolver } from "./loadAverage"
import { MemoryInfoResolver } from "./memoryInfo"

export default buildSchema({
  resolvers: [
    CpuUsageResolver,
    HostInfoResolver,
    LoadAverageResolver,
    MemoryInfoResolver,
  ],
})
