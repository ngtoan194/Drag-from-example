FROM node:11 AS node-builder
WORKDIR /src
COPY . .
RUN npm install -g @angular/cli@8.3.23
RUN npm install
RUN ng build --base-href=/um/ --deploy-url /um/ --prod --output-path dist/user-management-fe/um

FROM nginx:1.15.2-alpine
COPY --from=node-builder /src/dist/user-management-fe/um /usr/share/nginx/html/um
COPY nginx.site.template /etc/nginx/conf.d/
CMD envsubst '${BACKEND_URI}' < /etc/nginx/conf.d/nginx.site.template > /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'
