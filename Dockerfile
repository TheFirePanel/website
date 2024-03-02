FROM node:20 AS build
WORKDIR /app
COPY ./ .
RUN npm ci && \
    npm install -g @angular/cli@17 && \
    ng build

FROM bitnami/nginx:latest AS final
USER root
RUN apt-get update && apt-get upgrade -y
USER 1001
COPY nginx.conf /opt/bitnami/nginx/conf/server_blocks/nginx.conf
COPY --from=build /app/dist/website/browser* /app
