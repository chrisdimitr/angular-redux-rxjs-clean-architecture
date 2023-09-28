# Stage 1 - Build Application (Node v18.18.0 LTS)
ARG APP_UI_ENCRYPTION_KEY

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
ARG APP_UI_ENCRYPTION_KEY

FROM nginx:alpine AS DeployApp
RUN echo "Stage 2 - Deploy Application on Nginx ${APP_UI_ENCRYPTION_KEY}"

RUN apk add --no-cache gnupg

ENV ENCRYPTION_KEY=${APP_UI_ENCRYPTION_KEY}

RUN echo "Working directory: $(pwd)"
COPY --from=BuildApp /app/dist/angular-redux-rxjs-clean-architecture /usr/share/nginx/html
COPY --from=BuildApp /app/docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=BuildApp /app/scripts/docker/encrypt-file.sh /opt/app/scripts/encrypt-file.sh
RUN chmod +x /opt/app/scripts/encrypt-file.sh

EXPOSE 80

# Set the custom entrypoint script as the entrypoint
#ENTRYPOINT ["/opt/scripts/encrypt-file.sh /usr/share/nginx/html/assets/env/.env.development ${APP_UI_ENCRYPTION_KEY}"]

# Start Nginx when the container starts
#CMD ["sleep", "4"]
#CMD ["/bin/sh", "-c", "/opt/scripts/encrypt-file.sh /usr/share/nginx/html/assets/env/.env.development $ENCRYPTION_KEY && exec nginx -g daemon off"]
#CMD ["/bin/sh", "-c", "/opt/scripts/encrypt-file.sh", "/usr/share/nginx/html/assets/env/.env.development $ENCRYPTION_KEY"]
CMD ["sh", "-c", "/opt/app/scripts/encrypt-file.sh FinartixDEV1 /opt/app/assets/env/.env.development /usr/share/nginx/html/assets/env/.env.development && exec nginx -g 'daemon off;'"]