import { describe, it, expect } from 'bun:test'
import { app } from '@server'

describe('Elysia', () => {
    it('should health check', async () => {
        const response = await app.handle(
            new Request('http://localhost/health')
        )

        expect(response.status).toBe(200)
        expect(await response.text()).toBe('ok')
    })
})
