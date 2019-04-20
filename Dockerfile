FROM node:10-alpine@sha256:9f98ae50c35eedb87ee5a7c9d93d02fe12af9a157b4a8353d76b7b2e099a4f3b

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

