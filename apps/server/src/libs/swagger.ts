import { Elysia } from 'elysia'
import { swagger } from '@elysiajs/swagger'

export const documentation = new Elysia({ name: 'swagger' }).use(swagger())

export default documentation
