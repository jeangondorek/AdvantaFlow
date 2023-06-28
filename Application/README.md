# Prog2Project

## Alunos

- Willian Dal Pont & Jean Gondorek

## Breve descrição do projeto

O objetivo do projeto é criar um sistema de gerencia para o escritório de advocacia (mais informações na pasta/arquivo `EngSoft1/README.md` ou `EngSoft1/Elicitação e Requisitos funcionais ENG1.pdf`).

## Tecnologias utilziadas

- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Node.js](https://nodejs.org/en/docs/)
- [Vue.js](https://vuejs.org/v2/guide/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Express.js](https://expressjs.com/)
- [JWT (JSON Web Tokens)](https://jwt.io/introduction/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Docker](https://docs.docker.com/)
- [PostgreSQL](https://www.postgresql.org/docs/)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [NPM (Node Package Manager)](https://docs.npmjs.com/)

## Problema real

Necessidade de um programa para administração do escritório de advocacia com melhorias em relação as formas de gerir o escritório.

Melhorias seriam em relação ao armazenamento de arquivos, definição mais clara de tarefas e pessoas responsáveis para a execução das tarefas, poder anexar os arquivos nas tarefas, integração com serviçoes de email, sms e whatsapp para informar alterações de status ou informações do processo, uso de modelos dentro das páginas e agendamentos.

## Funcionalidades planejadas e implementadas

- [] Manter Usuário
- [] Manter Perfil
- [] Efetuar Login
- [] Esqueci minha senha
- [] Sair do sistema
- [] Tela inicial
- [] Manter tarefa
- [] Manter cliente
- [] Manter processo
- [] Manter assuntos/tags do processo
- [] Manter comarca e tribunal do processo
- [] Manter fase do processo
- [] Feedback ao cliente

## Informações para rodar projeto

- Necessário inicializar o banco de dados na pasta/arquivo `Banco1/README.md`
- Após o banco inicializado com docker e o arquivo `.env` configurado para esse banco podemos seguir para rodar o projeto de duas formas.
  
### Faça o build da imagem docker na sua máquina

Dentro dessa pasta chamada `Application`

- `docker build -t NOME ./DIRETORIO`
  - Nome é o nome da imagem, diretório se refere onde está o arquivo Dockerfile, caso no mesmo diretorio que está rodando somente usar (.)
- `docker run -p 3000:3000 -d NOME`
  - Rodando projeto, o `NOME` deve ser o mesmo usado na build

### Rodar sem o docker, em dev

- É possível rodar o projeto sem usar o docker para a build, somente para o database. Executando os comandos `npm i` e `npm start`.
