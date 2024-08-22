import { $ } from 'bun'
import { join } from 'path'

$.cwd(join(import.meta.dirname, '..'))

await $`mv @ui/ui/* src/ui`
await $`rm -rf @ui`
