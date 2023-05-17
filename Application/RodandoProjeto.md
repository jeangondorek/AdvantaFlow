# Descrição do projeto

[Tutorial docker](https://www.youtube.com/watch?v=np_vyd7QlXk&ab_channel=MatheusBattisti-HoradeCodar)

Com o docker já instalado e o docker-compose tamém
Caso use linux consultar [tutorial](https://docs.docker.com/desktop/install/ubuntu/)

Rodar o comanado para adicionar a imagem do postgres

```bash
docker pull postgres
```

e rodar a imagem dentro do docker

```bash
docker run --name db_postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres
```

Deve-se finalizar a instancia do posgres no localhost.

## Criando projeto node

Nesse momento se cria o projeto node, inicializa o git e o npm. Instala dependencias e cria os arquivos dockerfile e configura ele.
A configuração aplicada foi a forma "padrão" para projetos.

### Node já inciado com o npm. Dependencias instaladas

- Express
- Nodemon
- Typescript
- jsonwebtoken
- pgpromise
![stack](https://skillicons.dev/icons?i=js,html,css,express,nodejs,vue,typescript,docker,postgres)

#### Rodar sem o docker, em dev

- É possível rodar o projeto sem usar o docker, porém sem database, simplesmente alterando a porta no arquivo `index.ts`
- e executando o comando `npm i` e `npm start`

## Para ser usado em produção

### Faça o build da imagem docker na sua máquina

- Nome é o nome da imagem, diretório se refere onde está o arquivo Dockerfile, caso no mesmo diretorio que está rodando somente usar (.)
- `docker build -t NOME ./DIRETORIO`
- Rodando projeto, o `NOME` deve ser o mesmo usado na build
- `docker run -p 3000:3000 -d NOME`

#### Limpando docker

- `docker system prune`

## Arquitetura do projeto

[Vídeo aula](https://www.youtube.com/watch?v=0NCnwiXCks4&list=PL29TaWXah3iaaXDFPgTHiFMBF6wQahurP&index=8&ab_channel=LucasSouzaDev)

[Curso](https://www.youtube.com/playlist?list=PL29TaWXah3iaaXDFPgTHiFMBF6wQahurP)
