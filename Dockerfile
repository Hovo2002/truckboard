FROM alpine:3.7

RUN apk update --no-cache && \
    apk add --no-cache nodejs

ENV PROJECT_DIR /var/www/html/

WORKDIR $PROJECT_DIR

COPY package*.json $PROJECT_DIR

RUN npm install

COPY . $PROJECT_DIR

RUN npm run build

EXPOSE 8080

CMD ["node", "serve-app.js"]
