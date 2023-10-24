# syntax=docker/dockerfile:1.4
ARG NODE_VERSION=20
FROM node:${NODE_VERSION}-slim as base

ENV NODE_ENV=production

WORKDIR /app

RUN apt-get update -qq && \
  apt-get install -y openssl

FROM base as build

# Build dependencies for node modules
RUN apt-get update -qq && \
  apt-get install -y python3 pkg-config build-essential openssl

WORKDIR /app/server
COPY --link server .
RUN npm ci --include=dev
RUN npx prisma generate
RUN npm run build

WORKDIR /app/web
COPY --link web .
RUN npm ci --include=dev
RUN npm run build

FROM base
COPY --from=build /app/server/dist /app/server/dist
COPY --from=build /app/server/node_modules /app/server/node_modules
COPY --from=build /app/server/prisma /app/server/prisma
COPY --from=build /app/web/dist /app/web/dist
COPY --from=build /app/web/node_modules /app/web/node_modules

EXPOSE 3000
WORKDIR /app/server
CMD npx prisma migrate deploy && node ./dist/index.js
