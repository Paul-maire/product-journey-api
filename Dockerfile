FROM node:12.18-alpine

RUN mkdir -p /product-journey-api
COPY . /product-journey-api
WORKDIR /product-journey-api

RUN set -ex; \
	apk add postgresql-client; \
	yarn global add knex pg nodemon;

ENV NODE_ENV=development

COPY . /product-journey-api

RUN yarn install

EXPOSE 5000
