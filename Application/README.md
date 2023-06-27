# Projeto Integrador

Obetivo desenvolver uma aplicação completa.

## Tecnologias a serem usadas

- HTML
- CSS
- JavaScript
- NodeJs
- Vue
- Typescript
- Express
- JWT
- Docker
- Postgres
- Sqlite

https://github.com/BrasilAPI/BrasilAPI

https://dbdiagram.io/d

https://jsoncrack.com/editor

https://app.diagrams.net/

https://whimsical.com/

User controller access
https://www.youtube.com/watch?v=AUY2AUAmT44&ab_channel=Rocketseat

https://www.youtube.com/watch?v=TGCwB9oMR0o&ab_channel=DanieleLe%C3%A3o



https://upstash.com
https://railway.app/

Deploy backend
https://www.youtube.com/watch?v=pmXfvd6Zqg4&list=PL85ITvJ7FLogNHtbfjISMtEk_WepbGMO6&index=2&ab_channel=Rocketseat
https://render.com/

Deploy front
https://vercel.com/

#### Rodar sem o docker, em dev

- É possível rodar o projeto sem usar o docker, porém sem database, simplesmente alterando a porta no arquivo `index.ts`
- e executando o comando `npm i` e `npm start`

## Para ser usado em produção

### Faça o build da imagem docker na sua máquina

- Nome é o nome da imagem, diretório se refere onde está o arquivo Dockerfile, caso no mesmo diretorio que está rodando somente usar (.)
- `docker build -t NOME ./DIRETORIO`
- Rodando projeto, o `NOME` deve ser o mesmo usado na build
- `docker run -p 3000:3000 -d NOME`
