FROM node:10-alpine@sha256:409726705cd454a527af5032f67ef068556f10d3c40bb4cc5c6ed875e686b00e

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

