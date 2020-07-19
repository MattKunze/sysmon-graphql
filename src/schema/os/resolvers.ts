import fileSize from "file-size"
import os from "os"

import { HostInfo, MemoryInfo } from "types"

const Query = {
  hostInfo: (): HostInfo => ({
    arch: os.arch(),
    cpuCount: os.cpus().length,
    hostname: os.hostname(),
    platform: os.platform(),
    release: os.release(),
    type: os.type(),
    uptime: os.uptime(),
    version: os.version(),
  }),
  loadAverage: () => os.loadavg(),
  memoryInfo: (): MemoryInfo => ({
    total: fileSize(os.totalmem()).human(),
    percentFree: Math.floor((100 * os.freemem()) / os.totalmem()),
  }),
}

export default { Query }
