FROM oven/bun:1.1.25 AS build

WORKDIR /app

# Cache packages
COPY package.json package.json
COPY bun.lockb bun.lockb

COPY /apps/server/package.json ./apps/server/package.json
COPY /packages/config/package.json ./packages/config/package.json

RUN bun install

COPY /apps/server ./apps/server
COPY /packages/config ./packages/config

ENV NODE_ENV=production

RUN bun build --compile --minify-whitespace --minify-syntax apps/server/src/index.ts --outfile server

# -----------
FROM gcr.io/distroless/base

WORKDIR /app

COPY --from=build /app/server server
COPY --from=build /app/node_modules node_modules
# .env .env

ENV NODE_ENV=production
ENV PORT=3001
ENV OTEL=false

CMD ["./server"]

EXPOSE 3001
