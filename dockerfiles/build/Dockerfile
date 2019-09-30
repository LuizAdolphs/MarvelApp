FROM node:8.16.0-alpine

RUN npm install -g serve

COPY /app /app

WORKDIR /app

RUN npm install
RUN npm run build

EXPOSE 3000

ENTRYPOINT [ "serve", "-s", "build" ]
