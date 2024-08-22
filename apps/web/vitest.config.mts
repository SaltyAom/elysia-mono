import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

import { alias } from 'config/next/index.mjs'

export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
        exclude: ['e2e/**']
    },
    resolve: {
        alias
    }
})
