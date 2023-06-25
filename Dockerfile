FROM node:alpine

WORKDIR /usr/src/app

COPY packege.json .

RUN npm i

COPY . .

CMD [ "node", "index.js" ]
