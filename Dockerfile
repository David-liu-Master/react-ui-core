FROM node:10-alpine@sha256:9b3a547c70a540d2f7bb4e6f6bff34e9efb8ff6eb6258745d2d41045fd5e8b02

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

