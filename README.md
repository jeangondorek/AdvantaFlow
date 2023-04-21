# Descrição do projeto

Aconfiguração da porta do container do postgres ficou na porta 5433.

#### Node já inciado com o npm. Dependencias instaladas.
- Express
- 

#### Faça o build da imagem docker na sua máquina.
- Nome é o nome da imagem, diretório se refere onde está o arquivo Dockerfile, caso no mesmo diretorio que está rodando somente usar (.)
- ```docker build -t NOME ./DIRETORIO```
- Rodando projeto, deve ser o mesmo usado na build
- ```docker run -p 3000:3000 -d NOME```