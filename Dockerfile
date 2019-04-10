FROM node:10-alpine@sha256:217ffdf869f094c8ba5bbd505ab51e13d6a7616ad999a5b740a3bb5f0490f2f3

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

