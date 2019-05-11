FROM node:10-alpine@sha256:5f9cd51eaeeb2eaec4a9bcf92d18d8908f1d489534cabff04b5f4eafae877cee

ADD package.json /package.json

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin
RUN yarn

RUN mkdir -p /var/www/app
WORKDIR /var/www/app
ADD . /var/www/app

# http port
EXPOSE 3000
# Websocket port
EXPOSE 35729

CMD ["yarn", "start"]

