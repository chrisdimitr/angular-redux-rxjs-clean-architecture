# Stage 1 - Build
FROM node:18.17.1-buster-slim AS build
LABEL stage1="Build"

RUN apt-get update; apt-get install -y g++ make libpng-dev

ARG ENV

WORKDIR /app

COPY . .
RUN npm ci
RUN npm run build:${ENV}

# Stage 2 - Deploy on Nginx
FROM nginx:alpine
LABEL stage2="Deploy on Nginx"

COPY --from=build /app/dist/angular-redux-rxjs-clean-architecture /usr/share/nginx/html
COPY scripts/docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080