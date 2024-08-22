import { Elysia } from 'elysia'

export const app = new Elysia()
    .get('/', 'ok')
    .get('/health', 'ok')
    .listen(process.env.PORT ?? 3001)

if (process.env.NODE_ENV !== 'production') app.use(import('@server/libs/swagger'))
if (process.env.OTEL === 'true') app.use(import('@server/libs/otel'))

export type app = typeof app

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
