FROM node:10-alpine@sha256:d5d419abdd59d3c9f1ab5acc1c3880fcc6208fdb7995edf55c1e6489adb5e371

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

