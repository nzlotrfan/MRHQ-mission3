FROM node:lts
WORKDIR /app
COPY /car-search-app/package.json ./
COPY /car-search-app/package-lock.json ./
COPY /car-search-app/ ./
RUN npm i
CMD ["npm", "run", "start"]




