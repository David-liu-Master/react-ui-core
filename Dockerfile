FROM node:10-alpine@sha256:e622269573edaa6be7676d21ec87f9038cef11464df87d9d67425d6af29ee4f1

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

