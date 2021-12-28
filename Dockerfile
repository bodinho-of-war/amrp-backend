FROM node:14-alpine as base

WORKDIR /
COPY package*.json /
EXPOSE 8000

ENV NODE_ENV=development
RUN npm install -g nodemon && npm install
COPY . /
CMD ["nodemon", "bin/www"]  