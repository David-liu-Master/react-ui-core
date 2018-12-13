FROM node:10-alpine@sha256:15d9f1cd2ca1e5b8c812792e60a1ca6609f1d547268e56f9a6c7d11c39a466dd

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

