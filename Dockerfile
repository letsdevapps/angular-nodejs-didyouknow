FROM node:latest AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g @angular/cli

# Desabilitar a coleta de dados do Angular CLI
RUN ng config --global cli.analytics false

COPY . .

RUN npm run build --prod

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]
