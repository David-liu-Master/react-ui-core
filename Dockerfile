FROM node:10-alpine@sha256:0b9999cc406d842543be109c0d9dcf6198a96cc3dacdf2a4fb015a6dcc8c17b8

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

