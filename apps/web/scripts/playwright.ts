import { $ } from 'bun'
import { join } from 'path'

$.cwd(join(import.meta.dirname, '..'))

await $`bun run build`

let server: ReturnType<typeof $>

await Promise.all([
    (server = $`bun run start`),
    (async () => {
        await Bun.sleep(500)
        await $`playwright test`

        server.throws(false)

        process.exit(0)
    })()
])
