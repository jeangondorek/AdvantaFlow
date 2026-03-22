Frontend (Next.js)

Este diretório contém o frontend da aplicação, implementado em Next.js (React), consumindo a API do backend NestJS.

## Como rodar o projeto

```bash
# Instalar dependências
$ npm install

# Rodar em modo desenvolvimento (localhost:3000)
$ npm run dev

# Build para produção
$ npm run build
$ npm start
```

Para mais detalhes, consulte a documentação oficial do Next.js: https://nextjs.org/docs

## Estrutura principal

- `pages/` — Rotas e páginas da aplicação
- `components/` — Componentes React reutilizáveis
- `public/` — Arquivos estáticos (imagens, favicon, etc)
- `styles/` — Arquivos de estilo (CSS/SCSS)

Outros diretórios podem ser criados conforme a necessidade do projeto.

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
