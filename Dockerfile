FROM node:25 AS build
WORKDIR /app
COPY ./ .
RUN npm i && \
    npm install -g @angular/cli@21 && \
    ng build

FROM nginx:1.29.4-alpine AS final
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/website/browser* /usr/share/nginx/html
