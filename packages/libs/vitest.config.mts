import { defineConfig } from 'vitest/config'

import { alias } from 'config/next/index.mjs'

export default defineConfig({
    resolve: {
        alias
    }
})
