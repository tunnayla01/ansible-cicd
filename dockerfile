FROM node:20-alpine

WORKDIR /app

# Enable corepack (ships with Node 20)
RUN corepack enable

# Copy only manifest files first
COPY package.json pnpm-lock.yaml ./

# Install dependencies using the pnpm version specified in the lockfile
RUN corepack prepare pnpm@latest --activate && pnpm install --frozen-lockfile

# Copy project files
COPY . .

# Build
RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]
