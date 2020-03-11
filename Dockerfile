FROM node

WORKDIR /app

# VOLUME . /app

COPY . .

RUN npm install

CMD npm start