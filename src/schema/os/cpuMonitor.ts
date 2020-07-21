import os from "os"

import { CpuUsage } from "types"

let cpuUsage: CpuUsage[] = []

const makePercent = (num: number) => Math.round(num * 100)

const keys = ["user", "nice", "sys", "irq", "idle"]
let prev = null
const onTick = () => {
  const cpus = os.cpus()
  if (prev) {
    cpuUsage = cpus
      .map((cpu, index) =>
        keys.reduce((memo, key) => {
          memo[key] = cpu.times[key] - prev[index].times[key]
          return memo
        }, {})
      )
      .map((delta) => {
        const total = keys.reduce((acc, key) => acc + delta[key], 0)
        return {
          user: makePercent((delta["user"] + delta["nice"]) / total),
          sys: makePercent((delta["sys"] + delta["irq"]) / total),
          idle: makePercent(delta["idle"] / total),
        }
      })
  }
  prev = cpus

  checkIdle()
}

let handle = null

function start() {
  if (!handle) {
    handle = setInterval(onTick, 1000)
    lastRequest = Date.now()
  }
}

function stop() {
  if (handle) {
    clearInterval(handle)
    handle = null
    cpuUsage = []
  }
}

let lastRequest = 0
const idleTimeout = 60 * 1000

const checkIdle = () => {
  const idle = Date.now() - lastRequest
  if (idle > idleTimeout) {
    console.info("cpu monitor idle timeout")
    stop()
  }
}

export function currentUsage() {
  if (!handle) {
    start()
  }
  lastRequest = Date.now()
  return cpuUsage
}
