FROM node:20

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install -g @angular/cli
RUN npm install
COPY . .
RUN npm run build

# CMD ["npx", "http-server", "dist/frontend", "-p", "4200"]
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200", "--disable-host-check"]
