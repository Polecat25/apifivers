FROM node:18-alpine3.16


WORKDIR /src

COPY package*.json ./
#NPM CI SIRVE PARA INSTALR LO QUYE ESTA DENTRO DEL PACKAGE-LOCK,JOSN
RUN npm ci && npm cache clean --force 
#ENV NODE_ENV=PRODUCTION 
ENV PORT $PORT
ENV MONGO_DB=$MONGO_DB

COPY . .
#RUN npm install 

EXPOSE 5000

CMD ["node", "dist/index.js"]