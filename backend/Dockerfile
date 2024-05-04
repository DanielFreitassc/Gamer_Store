FROM node:20-alpine

RUN addgroup app && adduser -S -G app app

USER app

WORKDIR /app

COPY package*.json ./
COPY ./prisma prisma

USER root

RUN chown -R app:app .

USER app

RUN npx prisma generate --schema=./prisma/schema.prisma

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm" ,"run", "start:prod"]