FROM node:20-alpine as node_base

# ---- RUNNER BASE ----
FROM node_base as runner_base

RUN apk add --no-cache curl openssh-client

# ---- BUILD APP ----
FROM node_base as builder

WORKDIR /app

COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm i

COPY ./src ./src
COPY ./tsconfig.json ./
COPY ./tailwind.config.ts ./
COPY ./postcss.config.mjs ./
COPY ./next.config.mjs ./

RUN npm run build

# ---- RUNNER ----
FROM runner_base as runner

WORKDIR /app

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]