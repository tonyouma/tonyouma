FROM node:16.4.2 as build
WORKDIR /app
COPY package*.json .
RUN yarn install
COPY . .
RUN yarn run build

FROM nginx:1.13.6 as web
