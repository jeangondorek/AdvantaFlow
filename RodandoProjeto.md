# Descrição do projeto

Tutorial docker https://www.youtube.com/watch?v=np_vyd7QlXk&ab_channel=MatheusBattisti-HoradeCodar

Com o docker já instalado e o docker-compose tamém
Caso use linux consultar tutorial
https://docs.docker.com/desktop/install/ubuntu/

Rodar o comanado para adicionar a imagem do postgres

```docker pull postgres```

e rodar a imagem dentro do docker

```docker run --name db_postgres -e POSTGRES_PASSWORD=postgres -p 5433:5433 -d postgres```

Aconfiguração da porta do container do postgres ficou na porta 5433.(5433 pois temos o postgres e pgadmin instalados rodando na 5432)


#### Criando projeto node
Nesse momento se cria o projeto node, inicializa o git e o npm. Instala dependencias e cria os arquivos dockerfile e configura ele. 
A configuração aplicada foi a forma "padrão" para projetos.

#### Node já inciado com o npm. Dependencias instaladas.
- Express
- Nodemon

#### Faça o build da imagem docker na sua máquina.
- Nome é o nome da imagem, diretório se refere onde está o arquivo Dockerfile, caso no mesmo diretorio que está rodando somente usar (.)
- ```docker build -t NOME ./DIRETORIO```
- Rodando projeto, deve ser o mesmo usado na build
- ```docker run -p 3000:3000 -d NOME```

#### Limpando docker
- ```docker system prune```


#### Rodar sem o docker
 É possível rodar o projeto sem usar o docker, porém sem database, simplesmente alterando a porta do `index.js` e executando o `npm start`.