FROM node:18.15.0-alpine AS deps

WORKDIR /app

ADD package.json yarn.lock ./
RUN yarn

COPY . .

EXPOSE 3000

CMD [ "yarn", "start" ]