# Stage 1 - Build Application (Node v18.18.0 LTS)
FROM node:lts-buster-slim AS BuildApp
RUN echo "Stage 1 - Build Application"

RUN apt-get update && apt-get install -y g++ make

ARG BUILD_ENV_TAG
ARG APP_UI_ENCRYPTION_KEY

WORKDIR /app

RUN echo "Working directory: $(pwd)"
COPY . .
RUN ls -la
RUN npm ci
RUN echo "Building Application for '${BUILD_ENV_TAG}' environment"
RUN APP_UI_ENCRYPTION_KEY=${APP_UI_ENCRYPTION_KEY} npm run build:${BUILD_ENV_TAG}

# Stage 2 - Deploy Application on Nginx
FROM nginx:alpine AS DeployApp
RUN echo "Stage 2 - Deploy Application on Nginx"

RUN echo "Working directory: $(pwd)"
COPY --from=BuildApp /app/dist/angular-redux-rxjs-clean-architecture /usr/share/nginx/html
COPY --from=BuildApp /app/docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]