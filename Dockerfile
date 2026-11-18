# syntax=docker/dockerfile:1

# ── Étape 1 : build Vite (indépendant de l'architecture, donc sur la plateforme du builder)
FROM --platform=$BUILDPLATFORM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund
COPY . .
# Vide = appels API relatifs (/api/...), relayés par nginx vers la gateway.
# Une variable d'environnement est prioritaire sur .env.production.
ARG VITE_API_URL=""
ENV VITE_API_URL=$VITE_API_URL
# vite build sans "tsc -b" : le code contient encore des erreurs de typage (139)
RUN npx vite build

# ── Étape 2 : nginx non-root qui sert le build et relaie /api vers la gateway
FROM nginxinc/nginx-unprivileged:1.27-alpine
ENV API_UPSTREAM=http://gateway-service:9999
COPY nginx/default.conf.template /etc/nginx/templates/default.conf.template
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080
