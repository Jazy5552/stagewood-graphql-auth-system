FROM node:14.5-alpine3.10 AS build
RUN mkdir /app
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . ./

ARG REACT_APP_HTTP_LINK_URL
RUN yarn build

FROM nginx:1.19
COPY --from=build /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/
RUN mv /etc/nginx/conf.d/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]