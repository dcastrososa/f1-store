#pull image from oficial node
FROM node:16.19.0

# Create app directory
WORKDIR /usr/src/app

# Install dependencies as a separate step for caching
COPY package.json ./
COPY package-lock.json ./


RUN npm install

COPY . .

EXPOSE 80

RUN npm run build

CMD npm run start:docker

