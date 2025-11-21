FROM node:20-alpine

LABEL maintainer="JACK <tunnayla01@gmail.com>"
LABEL descritption="A simple web server to serve static files built with Node.js and Express."

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install 

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]