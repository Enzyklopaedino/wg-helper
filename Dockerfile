FROM oven/bun:latest AS build

WORKDIR /app

COPY . .

RUN bun install
RUN bun run build


FROM nginx:latest

COPY --from=build /app/dist /usr/share/nginx/html

