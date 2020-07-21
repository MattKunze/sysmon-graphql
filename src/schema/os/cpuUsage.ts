import { Field, Int, ObjectType, Resolver, Query } from "type-graphql"

import { CpuUsage } from "types"
import { currentUsage } from "./cpuMonitor"

const wait = async (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms))

@ObjectType()
class CpuUsageType implements CpuUsage {
  @Field(() => Int)
  user: number
  @Field(() => Int)
  sys: number
  @Field(() => Int)
  idle: number
}

@Resolver()
export class CpuUsageResolver {
  @Query(() => [CpuUsageType])
  async cpuUsage(): Promise<CpuUsageType[]> {
    let usage = currentUsage()
    while (!usage.length) {
      await wait(100)
      usage = currentUsage()
    }

    return usage
  }
}
