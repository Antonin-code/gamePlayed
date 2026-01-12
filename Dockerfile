FROM node:20

WORKDIR /app

# Copie uniquement des dépendances
COPY package*.json ./

# Installation dans Linux (bins compatibles)
RUN npm ci

# Copie du code source seulement
COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173"]
