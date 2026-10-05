FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5173

# Vite requires host to be 0.0.0.0 to be accessible from outside the container
CMD ["npm", "run", "dev", "--", "--host"]
