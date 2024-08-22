FROM oven/bun:1.1.25 AS build

WORKDIR /app

# Cache packages
COPY turbo.json turbo.json
COPY package.json package.json
COPY bun.lockb bun.lockb

COPY /apps/web/package.json ./apps/web/package.json
COPY /apps/server/package.json ./apps/server/package.json
COPY /packages/config/package.json ./packages/config/package.json
COPY /packages/libs/package.json ./packages/libs/package.json
COPY /packages/ui/package.json ./packages/ui/package.json

RUN bun install

COPY /apps/web ./apps/web
COPY /apps/server ./apps/server
COPY /packages/config ./packages/config
COPY /packages/libs ./packages/libs
COPY /packages/ui ./packages/ui

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN bun run build --filter=web

FROM node:22-slim

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=build /app/apps/web/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=build --chown=nextjs:nodejs /app/apps/web/.next .

USER nextjs

ENV PORT=3000

EXPOSE 3000

CMD HOSTNAME="0.0.0.0" node server.js
