# Backend (NestJS)

Este diretório contém o backend da aplicação, implementado em NestJS, com integração ao PostgreSQL, documentação automática via Swagger e autenticação JWT.

## Comandos principais

```bash
# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm run start:dev

# Build para produção
npm run build
npm run start:prod
```

## Configuração

- Defina as variáveis de ambiente em `.env` conforme o exemplo em `.env.example`.
- A documentação da API estará disponível em `/api` após o servidor iniciar.
