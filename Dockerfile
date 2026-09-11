FROM node:22-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
EXPOSE 3000
# The source is bind-mounted at runtime, so generate the client and migrate on start.
CMD ["sh", "-c", "npx prisma generate && npx prisma migrate deploy && npm run dev"]
