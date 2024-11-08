FROM node:20-alpine
WORKDIR /app
RUN corepack enable && corepack prepare yarn
COPY ./package*.json ./
COPY ./yarn.lock ./
RUN yarn
COPY ./ ./
ENTRYPOINT yarn run start:dev