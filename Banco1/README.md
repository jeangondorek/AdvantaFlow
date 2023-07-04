# Banco de dados

## Projeto Conceitual

![projetoConceitual](https://github.com/jeangondorek/Prog2Project/assets/80592079/c31a316a-4598-4cf4-9c4f-aed8f3d7e2d3)

---

## Projeto Lógico

![image](https://github.com/jeangondorek/Prog2Project/assets/80592079/5699a312-d61f-405e-972b-48ffe719f2cb)

- DBDIAGRAM.IO

```
Table "perfil" {
  "id_perfil" serial [pk, not null, increment]
  "descricao_perfil" varchar(150) [not null]
  "permissoes_perfil" varchar(30) [not null]
  "permissoes_opcional_perfil" varchar(30)
}

Table "comarca" {
  "id_comarca" serial [pk, not null, increment]
  "descricao_comarca" varchar(100) [not null]
}

Table "indicacao" {
  "id_indicacao" serial [pk, not null, increment]
  "descricao_indicacao" varchar(100) [not null]
  "detalhes_indicacao" varchar(300)
}

Table "assunto" {
  "id_assunto" serial [pk, not null, increment]
  "descricao_assunto" varchar(100) [not null]
}

Table "fase" {
  "id_fase" serial [pk, not null, increment]
  "descricao_fase" varchar(100) [not null]
}

Table "usuario" {
  "cpf_usuario" varchar(11) [pk, not null]
  "nome_usuario" varchar(40) [not null]
  "status_usuario" varchar(10) [default: "Ativo"]
  "telefone_usuario" varchar(20) [not null]
  "oab_usuario" varchar(30)
  "senha_hash_usuario" varchar(20) [not null]
  "id_perfil_usuario" integer [not null]
}

Table "cliente" {
  "nome_cliente" varchar(40) [not null]
  "email_cliente" varchar(50) [not null]
  "cpf_cnpj_cliente" varchar(14) [pk, not null]
  "rg_cliente" varchar(10)
  "sexo_cliente" varchar(100)
  "profissao_cliente" varchar(40)
  "cep_cliente" varchar(8) [not null]
  "uf_cliente" varchar(2) [not null]
  "bairro_cliente" varchar(30) [not null]
  "endereco_cliente" varchar(30) [not null]
  "codigo_municipio_cliente" varchar(7) [not null]
  "nacionalidade" varchar(30)
  "data_nascimento_cliente" timestamp
  "telefone_cliente" varchar(14)
  "celular_cliente" varchar(14) [not null]
  "id_indicacao_cliente" integer
}

Table "processo" {
  "id_processo" serial [pk, not null, increment]
  "numero_cnpj_processo" varchar(20) [not null]
  "descricao_processo" varchar(100) [not null]
  "titulo_processo" varchar(50) [not null]
  "resultado_processo" varchar(50)
  "data_criacao_processo" timestamp [not null]
  "id_comarca_processo" integer [not null]
  "id_assunto_processo" integer [not null]
  "id_fase_processo" integer [not null]
  "cpf_cnpj_cliente_processo" varchar(14) [not null]
  "cpf_usuario_processo" varchar(11) [not null]
}

Table "execucao" {
  "id_execucao" serial [pk, not null, increment]
  "cpf_usuario_execucao" varchar(11) [not null]
  "id_processo_execucao" integer [not null]
}

Table "tarefa" {
  "id_processo_tarefa" integer [not null]
  "id_tarefa" serial [pk, not null, increment]
  "funcao_tarefa" varchar(50) [not null]
  "detalhes_tarefa" TEXT
  "data_criacao_tarefa" timestamp [not null]
  }

Table "relacionado" {
  "id_relacionado" serial [pk, not null, increment]
  "cpf_usuario_relacionado" varchar(11) [not null]
  "id_tarefa_relacionado" integer [not null]
}

Table "anexo" {
  "id_anexo" serial [pk, not null, increment]
  "id_tarefa_anexo" integer [not null]
  "nome_anexo" varchar(100)
  "formato_anexo" varchar(10)
  "tamanho_anexo" integer
  "data_carregamento_anexo" timestamp
  "caminho_arquivo_anexo" varchar(200)
}

Ref "fk_usuario_perfil":"perfil"."id_perfil" < "usuario"."id_perfil_usuario"

Ref "fk_cliente_indicacao":"indicacao"."id_indicacao" < "cliente"."id_indicacao_cliente"

Ref "fk_processo_comarca":"comarca"."id_comarca" < "processo"."id_comarca_processo"

Ref "fk_processo_assunto":"assunto"."id_assunto" < "processo"."id_assunto_processo"

Ref "fk_processo_fase":"fase"."id_fase" < "processo"."id_fase_processo"

Ref "fk_processo_cliente":"cliente"."cpf_cnpj_cliente" < "processo"."cpf_cnpj_cliente_processo"

Ref "fk_processo_usuario":"usuario"."cpf_usuario" < "processo"."cpf_usuario_processo"

Ref "fk_execucao_usuario":"usuario"."cpf_usuario" < "execucao"."cpf_usuario_execucao"

Ref "fk_execucao_processo":"processo"."id_processo" < "execucao"."id_processo_execucao"

Ref "fk_tarefa_processo":"processo"."id_processo" < "tarefa"."id_processo_tarefa"

Ref "fk_relacionado_usuario":"usuario"."cpf_usuario" < "relacionado"."cpf_usuario_relacionado"

Ref "fk_relacionado_tarefa":"tarefa"."id_tarefa" < "relacionado"."id_tarefa_relacionado"

Ref "fk_anexo_tarefa":"tarefa"."id_tarefa" < "anexo"."id_tarefa_anexo"
```

![Diagrama](https://github.com/jeangondorek/Prog2Project/assets/38532877/21f3cef8-d861-4928-8bd6-51bb2ea5498a)

---

## Projeto Físico

```sql
-- extensão do postgres que que realiza operações de hash
-- para inserir uma senha utilizando a extensão, é necessário usar a função crypt("Senha", gen_salt("bf"))
-- gel_salt é para especificar o algoritimo hash que vai ser utilizado, nesse caso é o  blowfish
-- para buscar uma senha é só utilizar na condição do select a função crypt
-- ex: where senha_hash = crypt('senha123', senha_hash);
create database projetointegrador;

\c projetointegrador;

create extension pgcrypto;

create table perfil (
    id_perfil serial not null,
    descricao_perfil varchar(150) not null,
    permissoes_perfil varchar(30) not null,
    permissoes_opcional_perfil varchar(30) null,
    constraint pk_perfil primary key (id_perfil)
);

create table comarca (
    id_comarca serial not null,
    descricao_comarca varchar(100) not null,
    constraint pk_comarca primary key (id_comarca)
);

create table indicacao (
    id_indicacao serial not null,
    descricao_indicacao varchar(100) not null,
    detalhes_indicacao varchar(300) null,
    constraint pk_indicacao primary key (id_indicacao)
);

create table assunto (
    id_assunto serial not null,
    descricao_assunto varchar(100) not null,
    constraint pk_assunto primary key (id_assunto)
);

create table fase (
    id_fase serial not null,
    descricao_fase varchar(100) not null,
    constraint pk_fase primary key (id_fase)
);

create table usuario (
    cpf_usuario varchar(11) not null,
    nome_usuario varchar(40) not null,
    status_usuario varchar(10) default 'Ativo',
    telefone_usuario varchar(20) not null,
    oab_usuario varchar (30) null, -- valor padrão é null mas vamos manter um padrão especificando pra ficar mais legível.
    senha_hash_usuario varchar(20) not null,
    id_perfil_usuario integer not null,
    constraint pk_usuario primary key (cpf_usuario),
    constraint fk_usuario_perfil foreign key (id_perfil_usuario) references perfil(id_perfil)
);

create table cliente (
    nome_cliente varchar(40) not null,
    email_cliente varchar(50) not null,
    cpf_cnpj_cliente varchar(14) not null,
    rg_cliente varchar(10) null,
    sexo_cliente varchar(100) null,
    profissao_cliente varchar(40) null,
    cep_cliente varchar(8) not null,
    uf_cliente varchar(2) not null,
    bairro_cliente varchar(30) not null,
    endereco_cliente varchar(30) not null,
    codigo_municipio_cliente varchar(7) not null,
    nacionalidade varchar(30) null,
    data_nascimento_cliente timestamp null,
    telefone_cliente varchar(14) null,
    celular_cliente varchar(14) not null,
    id_indicacao_cliente integer null,
    constraint pk_cliente primary key (cpf_cnpj_cliente),
    constraint fk_cliente_indicacao foreign key (id_indicacao_cliente) references indicacao(id_indicacao)
);

create table processo (
    id_processo serial not null,
    numero_cnpj_processo varchar(20) not null,
    descricao_processo varchar(100) not null,
    titulo_processo varchar(50) not null,
    resultado_processo varchar(50),
    data_criacao_processo timestamp not null,
    id_comarca_processo integer not null,
    id_assunto_processo integer not null,
    id_fase_processo integer not null,
    cpf_cnpj_cliente_processo varchar(14) not null,
    cpf_usuario_processo varchar(11) not null,
    constraint pk_processo primary key (id_processo),
    constraint fk_processo_usuario foreign key (cpf_usuario_processo) references usuario(cpf_usuario),
    constraint fk_processo_cliente foreign key (cpf_cnpj_cliente_processo) references cliente(cpf_cnpj_cliente),
    constraint fk_processo_comarca foreign key (id_comarca_processo) references comarca(id_comarca),
    constraint fk_processo_assunto foreign key (id_assunto_processo) references assunto(id_assunto),
    constraint fk_processo_fase foreign key (id_fase_processo) references fase(id_fase)
);

create table execucao (
    id_execucao serial not null,
    cpf_usuario_execucao varchar(11) not null,
    id_processo_execucao integer not null,
    constraint pk_execucao primary key (id_execucao),
    constraint fk_execucao_usuario foreign key (cpf_usuario_execucao) references usuario(cpf_usuario),
    constraint fk_execucao_processo foreign key (id_processo_execucao) references processo(id_processo)
);

create table tarefa (
    id_tarefa serial not null,
    funcao_tarefa varchar(50) not null,
    detalhes_tarefa TEXT,
    data_criacao_tarefa timestamp not null,
    id_processo_tarefa integer not null,
    constraint pk_tarefa primary key (id_tarefa),
    constraint fk_tarefa_processo foreign key (id_processo_tarefa) references processo(id_processo)
);

create table relacionado (
    id_relacionado serial not null,
    cpf_usuario_relacionado varchar(11) not null,
    id_tarefa_relacionado integer not null,
    constraint pk_relacionado primary key (id_relacionado),
    constraint fk_relacionado_usuario foreign key (cpf_usuario_relacionado) references usuario(cpf_usuario),
    constraint fk_relacionado_tarefa foreign key (id_tarefa_relacionado) references tarefa(id_tarefa)
);

create table anexo (
    id_anexo serial not null,
    id_tarefa_anexo integer not null,
    nome_anexo varchar(100),
    formato_anexo varchar(10),
    tamanho_anexo integer,
    data_carregamento_anexo timestamp,
    caminho_arquivo_anexo varchar(200),
    constraint pk_anexo primary key (id_anexo),
    constraint fk_anexo_tarefa foreign key (id_tarefa_anexo) references tarefa(id_tarefa)
);
```

### Projeto rodadando em um docker com postgres

Rodar o comanado para adicionar a imagem do postgres

- Baixar a imagem do postgres

```bash
docker pull postgres
```

- Rodar a imagem dentro do docker

```bash
docker run --name projetointegrador -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres
```

- Acessar o banco de dados do docker

```bash
docker exec -it projetointegrador psql -U postgres
```

- Após rodar os script em sql. OBS: tem que ser na ordem do arquivo pois tem relacionamento de tabelas.

### Parar postgres local

```bash
sudo /etc/init.d/postgresql stop
```

### Limpando docker

- `docker system prune`
