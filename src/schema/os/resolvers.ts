import os from "os"

import { HostInfo } from "types"

const Query = {
  hostInfo: (): HostInfo => ({
    arch: os.arch(),
    hostname: os.hostname(),
    platform: os.platform(),
    release: os.release(),
    type: os.type(),
    uptime: os.uptime(),
    version: os.version(),
  }),
}

export default { Query }
