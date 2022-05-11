FROM nginx

WORKDIR /usr/share/nginx/html
COPY webapp .
COPY "web.conf" /etc/nginx/conf.d/web.conf
RUN rm -rf /etc/nginx/conf.d/default.conf
EXPOSE 8090

