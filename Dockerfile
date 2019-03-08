FROM node:10-alpine@sha256:ba9152d0e2aa5fe45cb090b8e07757a28fa2fc6a6bfd1ae828e55cdbb9a30944

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

