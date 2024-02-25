FROM node:20 AS build
WORKDIR /app
COPY ./ .
RUN npm ci && \
    npm install -g @angular/cli@17 && \
    ng build

FROM nginx:latest AS final
COPY nginx.conf /etc/nginx/nginx.conf
RUN apt-get update && apt-get upgrade -y
COPY --from=build /app/dist/website/browser* /usr/share/nginx/html