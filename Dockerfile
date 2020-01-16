FROM node:alpine
RUN mkdir -p /usr/src/app
COPY * /usr/src/app/
WORKDIR /usr/src/app
RUN npm install 

EXPOSE 80
CMD [ "node", "index.js" ]