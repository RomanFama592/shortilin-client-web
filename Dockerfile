FROM node:18-alpine

WORKDIR /client-web

COPY package.json .

RUN npm i --omit=dev

COPY . .

EXPOSE 10000

CMD [ "npm", "start" ]