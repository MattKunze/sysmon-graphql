import os from "os"
import { Float, Resolver, Query } from "type-graphql"

@Resolver()
export class LoadAverageResolver {
  @Query(() => [Float])
  loadAverage() {
    return os.loadavg()
  }
}
