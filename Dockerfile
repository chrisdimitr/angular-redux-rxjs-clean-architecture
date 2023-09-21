# Stage 1 - Build Application (Node v18.18.0 LTS)
FROM node:lts-buster-slim AS BuildApp
RUN echo "Stage 1 - Build Application"

RUN apt-get update && apt-get install -y g++ make

ARG ENV

WORKDIR /app

COPY . .
RUN npm ci
RUN npm run build:${ENV}

# Stage 2 - Deploy Application on Nginx
FROM nginx:alpine AS DeployApp
RUN echo "Stage 2 - Deploy Application on Nginx"

COPY --from=BuildApp /app/dist/angular-redux-rxjs-clean-architecture /usr/share/nginx/html
COPY scripts/docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080