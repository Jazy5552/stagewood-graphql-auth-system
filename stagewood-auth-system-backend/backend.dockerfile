FROM node:14.5-alpine3.10

RUN mkdir /db
VOLUME /db

RUN mkdir /app
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . ./

EXPOSE 4000
ENTRYPOINT ["sh", "backend-entrypoint.sh"]
