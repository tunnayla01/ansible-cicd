FROM node:20-alpine

LABEL maintainer="JACK <tunnayla01@gmail.com>"
LABEL description="A simple web server to serve static files built with Node.js"

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy only necessary files first (for better caching)
COPY package.json pnpm-lock.yaml ./

# Install dependencies using pnpm
RUN pnpm install --frozen-lockfile

# Copy the rest of the project
COPY . .

# Build the project
RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]
