FROM node:12
WORKDIR /usr/src/app

COPY package*.json ./
COPY package-lock.json /usr/src/app

RUN npm install
RUN npm install pm2 -g

COPY . /usr/src/app

EXPOSE 8080


CMD ["pm2-docker", "start", "process.json"]
