import { defineConfig } from '@playwright/test'

export default defineConfig({
    testIgnore: 'test',
    testDir: 'e2e'
})
