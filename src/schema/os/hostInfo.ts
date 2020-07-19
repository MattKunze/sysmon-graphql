import os from "os"
import { ObjectType, Field, Int, Resolver, Query } from "type-graphql"

import { HostInfo } from "types"

@ObjectType()
export class HostInfoType implements HostInfo {
  @Field(() => String)
  arch: String
  @Field(() => Int)
  cpuCount: Number
  @Field(() => String)
  hostname: String
  @Field(() => String)
  platform: String
  @Field(() => String)
  release: String
  @Field(() => String)
  type: String
  @Field(() => Int)
  uptime: Number
  @Field(() => String)
  version: String
}

@Resolver(HostInfoType)
export class HostInfoResolver {
  @Query(() => HostInfoType)
  hostInfo() {
    return {
      arch: os.arch(),
      cpuCount: os.cpus().length,
      hostname: os.hostname(),
      platform: os.platform(),
      release: os.release(),
      type: os.type(),
      uptime: os.uptime(),
      version: os.version(),
    }
  }
}
