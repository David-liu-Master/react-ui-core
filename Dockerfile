FROM node:10-alpine@sha256:f2ef15bb0017aeca6573f7de6f4f872aba1f7d4aeb9e8cb2f923d0a12f51a946

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

