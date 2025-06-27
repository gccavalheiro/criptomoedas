# Etapa 1: Build
FROM node:18-alpine AS builder
WORKDIR /app

# Instalar pnpm globalmente
RUN npm install -g pnpm

# Copiar e instalar dependências
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copiar o restante do projeto e buildar
COPY . .
RUN pnpm build

# Etapa 2: Runner (produção)
FROM node:18-alpine
WORKDIR /app

# Criar usuário não-root
RUN addgroup -g 1001 nodejs && adduser -u 1001 -G nodejs -s /bin/sh -D nextjs

# Copiar artefatos de build
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Mudar para o usuário não-root
USER nextjs

# Definir variáveis de ambiente e porta
ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

# Rodar o servidor standalone
CMD ["node", "server.js"]
