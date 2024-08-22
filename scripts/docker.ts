import { $, type ShellPromise } from 'bun'

const ops = <ShellPromise[]>[]

ops.push($`bun run docker:web`)
ops.push($`bun run docker:server`)

await Promise.all(ops)
