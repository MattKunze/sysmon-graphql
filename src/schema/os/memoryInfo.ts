import fileSize from "file-size"
import os from "os"
import { ObjectType, Field, Int, Resolver, Query } from "type-graphql"

import { MemoryInfo } from "types"

@ObjectType()
export class MemoryInfoType implements MemoryInfo {
  @Field(() => String)
  total: String
  @Field(() => Int)
  percentFree: Number
}

@Resolver(MemoryInfoType)
export class MemoryInfoResolver {
  @Query(() => MemoryInfoType)
  memoryInfo() {
    return {
      total: fileSize(os.totalmem()).human(),
      percentFree: Math.floor((100 * os.freemem()) / os.totalmem()),
    }
  }
}
