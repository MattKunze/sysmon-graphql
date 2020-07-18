import os from "os"

interface HostInfo {
  arch: String
  hostname: String
  platform: String
  release: String
  type: String
  uptime: Number
  version: String
}

const resolvers = {
  Query: {
    hostInfo: (): HostInfo => ({
      arch: os.arch(),
      hostname: os.hostname(),
      platform: os.platform(),
      release: os.release(),
      type: os.type(),
      uptime: os.uptime(),
      version: os.version(),
    }),
  },
}

export default resolvers
