FROM node:26 AS build
WORKDIR /app
COPY ./ .
RUN npm ci && \
    npm install -g @angular/cli@21 && \
    ng build

FROM nginx:1.31.0-alpine AS final
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/website/browser* /usr/share/nginx/html
