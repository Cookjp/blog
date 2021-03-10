FROM node:15.8.0-buster-slim

WORKDIR /usr/app

COPY package.json .

RUN yarn global add gatsby-cli

RUN yarn install

COPY gatsby-config.js .

COPY src ./src

CMD ["gatsby", "develop","-p", "5000", "-H", "0.0.0.0"]