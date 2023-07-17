# Banco de dados

## Projeto Conceitual

![image](https://github.com/jeangondorek/Prog2Project/assets/80592079/9b6273fe-93bb-49dc-83bd-2d7db0a78e33)

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



## Projeto Físico

```sql
create database projetointegrador;

\c projetointegrador;

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
    oab_usuario varchar (30) null,
    senha_hash_usuario varchar(60) not null,
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

## Insersão de tuplas

```sql
INSERT INTO perfil (descricao_perfil, permissoes_perfil, permissoes_opcional_perfil) VALUES ('administrador', 'total', 'administra todo o sistema');
INSERT INTO perfil (descricao_perfil, permissoes_perfil, permissoes_opcional_perfil) VALUES ('advogado', 'advogado', 'gerencia quase todo o sistema');
INSERT INTO perfil (descricao_perfil, permissoes_perfil, permissoes_opcional_perfil) VALUES ('estagiario', 'estagiario', 'gerencia menos no sistema');
-- AS SENHAS ESTÃO CRIPTOGRAFADAS PARA FUNCIONAR NA APLICAÇÃO SENHA = 'senhadificil', HASH É FEITO PELO BCRYPT
INSERT INTO usuario (cpf_usuario, nome_usuario, status_usuario, telefone_usuario, oab_usuario, senha_hash_usuario, id_perfil_usuario) VALUES('1234567890', 'administrador', 'ativo', '1234567890', null, '$2a$10$NaQtdppEmfSA2EYhbXUUI.Z.Si2PyIjTtyE4n.yek9nivgfT8CVyW', '1');
INSERT INTO usuario (cpf_usuario, nome_usuario, status_usuario, telefone_usuario, oab_usuario, senha_hash_usuario, id_perfil_usuario) VALUES('1234567891', 'advogado', 'ativo', '1234567891', null, '$2a$10$NaQtdppEmfSA2EYhbXUUI.Z.Si2PyIjTtyE4n.yek9nivgfT8CVyW', '2');
INSERT INTO usuario (cpf_usuario, nome_usuario, status_usuario, telefone_usuario, oab_usuario, senha_hash_usuario, id_perfil_usuario) VALUES('1234567892', 'advogado', 'ativo', '1234567892', null, '$2a$10$NaQtdppEmfSA2EYhbXUUI.Z.Si2PyIjTtyE4n.yek9nivgfT8CVyW', '2');
INSERT INTO usuario (cpf_usuario, nome_usuario, status_usuario, telefone_usuario, oab_usuario, senha_hash_usuario, id_perfil_usuario) VALUES('1234567893', 'advogado', 'ativo', '1234567893', null, '$2a$10$NaQtdppEmfSA2EYhbXUUI.Z.Si2PyIjTtyE4n.yek9nivgfT8CVyW', '2');
INSERT INTO usuario (cpf_usuario, nome_usuario, status_usuario, telefone_usuario, oab_usuario, senha_hash_usuario, id_perfil_usuario) VALUES('1234567894', 'estagiario', 'ativo', '1234567894', null, '$2a$10$NaQtdppEmfSA2EYhbXUUI.Z.Si2PyIjTtyE4n.yek9nivgfT8CVyW', '3');
INSERT INTO usuario (cpf_usuario, nome_usuario, status_usuario, telefone_usuario, oab_usuario, senha_hash_usuario, id_perfil_usuario) VALUES('1234567895', 'estagiario', 'ativo', '1234567895', null, '$2a$10$NaQtdppEmfSA2EYhbXUUI.Z.Si2PyIjTtyE4n.yek9nivgfT8CVyW', '3');
INSERT INTO usuario (cpf_usuario, nome_usuario, status_usuario, telefone_usuario, oab_usuario, senha_hash_usuario, id_perfil_usuario) VALUES('1234567896', 'estagiario', 'ativo', '1234567896', null, '$2a$10$NaQtdppEmfSA2EYhbXUUI.Z.Si2PyIjTtyE4n.yek9nivgfT8CVyW', '3');
INSERT INTO usuario (cpf_usuario, nome_usuario, status_usuario, telefone_usuario, oab_usuario, senha_hash_usuario, id_perfil_usuario) VALUES('1234567897', 'estagiario', 'ativo', '1234567897', null, '$2a$10$NaQtdppEmfSA2EYhbXUUI.Z.Si2PyIjTtyE4n.yek9nivgfT8CVyW', '3');
INSERT INTO usuario (cpf_usuario, nome_usuario, status_usuario, telefone_usuario, oab_usuario, senha_hash_usuario, id_perfil_usuario) VALUES('1234567898', 'estagiario', 'ativo', '1234567898', null, '$2a$10$NaQtdppEmfSA2EYhbXUUI.Z.Si2PyIjTtyE4n.yek9nivgfT8CVyW', '3');
INSERT INTO usuario (cpf_usuario, nome_usuario, status_usuario, telefone_usuario, oab_usuario, senha_hash_usuario, id_perfil_usuario) VALUES('1234567899', 'estagiario', 'ativo', '1234567899', null, '$2a$10$NaQtdppEmfSA2EYhbXUUI.Z.Si2PyIjTtyE4n.yek9nivgfT8CVyW', '3');

INSERT INTO comarca (descricao_comarca) VALUES ('COMARCA DE PRIMEIRA INSTANCIA DE TANGAMANDAPIO');
INSERT INTO comarca (descricao_comarca) VALUES ('COMARCA DA SEGUNDA VARA DE VARSÓVIA');
INSERT INTO comarca (descricao_comarca) VALUES ('COMARCA DA SEGUNDA VARA DE TANGAMANDAPIO');

INSERT INTO assunto (descricao_assunto) VALUES ('CONTRATO DE VENDA');
INSERT INTO assunto (descricao_assunto) VALUES ('CONTRATO DE COMPRA');
INSERT INTO assunto (descricao_assunto) VALUES ('CONTRATO');

INSERT INTO fase (descricao_fase) VALUES ('INICIADO');
INSERT INTO fase (descricao_fase) VALUES ('EM ANDAMENTO');
INSERT INTO fase (descricao_fase) VALUES ('CONCLUÍDO');
INSERT INTO fase (descricao_fase) VALUES ('AGUARDANDO DEFINIÇÃO');

INSERT INTO cliente (nome_cliente, email_cliente, cpf_cnpj_cliente, rg_cliente, sexo_cliente, profissao_cliente, cep_cliente, uf_cliente, bairro_cliente, endereco_cliente, codigo_municipio_cliente , nacionalidade, data_nascimento_cliente , telefone_cliente , celular_cliente , id_indicacao_cliente) VALUES ('CARLINHOS DE JESUS', 'CARLINHOSDEJESUS@EMAIL.COM', '12345678901', '65445687', 'MASCULINO', 'MÚSICO', '88888888', 'SC', 'BAIRRO DA APARECIDA', 'RUA CAMALEAO N58', '123', 'BRASILEIRO', 
'1875-12-12', '556688889874', '5566666668745', null);
INSERT INTO cliente (nome_cliente, email_cliente, cpf_cnpj_cliente, rg_cliente, sexo_cliente, profissao_cliente, cep_cliente, uf_cliente, bairro_cliente, endereco_cliente, codigo_municipio_cliente , nacionalidade, data_nascimento_cliente , telefone_cliente , celular_cliente , id_indicacao_cliente) VALUES ('PREGOS E CIA', 'PREGOASAVENDA@EMAIL.COM', '12345678000118', null, null, null, '88888888', 'SC', 'BAIRRO DA APARECIDA', 'RUA CAMALEAO N59', '113', null, 
'1975-01-12', '556677889874', '5566677668745', null);
INSERT INTO cliente (nome_cliente, email_cliente, cpf_cnpj_cliente, rg_cliente, sexo_cliente, profissao_cliente, cep_cliente, uf_cliente, bairro_cliente, endereco_cliente, codigo_municipio_cliente , nacionalidade, data_nascimento_cliente , telefone_cliente , celular_cliente , id_indicacao_cliente) VALUES ('CARLINHOS MAIA', 'CARLINHOSMAIA@EMAIL.COM', '12345678911', '65445657', 'MASCULINO', 'VENDEDOR', '88878888', 'SC', 'BAIRRO DA PEDRA', 'RUA CALANGO N56', '13', 'BRASILEIRO', 
'1995-06-12', '556688589874', '5566566668745', null);
INSERT INTO cliente (nome_cliente, email_cliente, cpf_cnpj_cliente, rg_cliente, sexo_cliente, profissao_cliente, cep_cliente, uf_cliente, bairro_cliente, endereco_cliente, codigo_municipio_cliente , nacionalidade, data_nascimento_cliente , telefone_cliente , celular_cliente , id_indicacao_cliente) VALUES ('JENOVEVA DE JESUS', 'JENOVEVA@EMAIL.COM', '12345078901', '65452687', 'FEMININO', 'PROFESSORA', '88818888', 'SC', 'BAIRRO DA LUZ', 'RUA ILUMINADA N666', '666', 'BRASILEIRO', 
'2005-02-02', '556680189874', '5566876668745', null);
INSERT INTO cliente (nome_cliente, email_cliente, cpf_cnpj_cliente, rg_cliente, sexo_cliente, profissao_cliente, cep_cliente, uf_cliente, bairro_cliente, endereco_cliente, codigo_municipio_cliente , nacionalidade, data_nascimento_cliente , telefone_cliente , celular_cliente , id_indicacao_cliente) VALUES ('ALFRIDA PEREIRA', 'AALFRIDA@EMAIL.COM', '12345610201', null, 'FEMININO', null, '81188888', 'SC', 'BAIRRO NOOOOSSAA SENHORA', 'RUA FEIJAO N556', '3', 'BRASILEIRO', 
'1995-08-04', '5566822889874', '5566565668745', null);
INSERT INTO cliente (nome_cliente, email_cliente, cpf_cnpj_cliente, rg_cliente, sexo_cliente, profissao_cliente, cep_cliente, uf_cliente, bairro_cliente, endereco_cliente, codigo_municipio_cliente , nacionalidade, data_nascimento_cliente , telefone_cliente , celular_cliente , id_indicacao_cliente) VALUES ('ROMEU DE JESUS', 'RMJC@EMAIL.COM', '12345678601', null, 'MASCULINO', null, '88288000', 'SC', 'BAIRRO UM', 'RUA PASTOR PEDRO N5563', '1', 'BRASILEIRO', 
'1905-04-05', '556644889874', '5566446668745', null);
INSERT INTO cliente (nome_cliente, email_cliente, cpf_cnpj_cliente, rg_cliente, sexo_cliente, profissao_cliente, cep_cliente, uf_cliente, bairro_cliente, endereco_cliente, codigo_municipio_cliente , nacionalidade, data_nascimento_cliente , telefone_cliente , celular_cliente , id_indicacao_cliente) VALUES ('ROMENILDO DA SILVA', 'ROMENILDO@EMAIL.COM', '12045078901', null, 'MASCULINO', null, '88122888', 'SC', 'BAIRRO PADRE KESSIO', 'RUA SETE N556', '58', 'BRASILEIRO', 
'1985-02-12', '556688229874', '5566622668745', null);
INSERT INTO cliente (nome_cliente, email_cliente, cpf_cnpj_cliente, rg_cliente, sexo_cliente, profissao_cliente, cep_cliente, uf_cliente, bairro_cliente, endereco_cliente, codigo_municipio_cliente , nacionalidade, data_nascimento_cliente , telefone_cliente , celular_cliente , id_indicacao_cliente) VALUES ('PEDRO DA SILVA', 'PEDROSILVA@EMAIL.COM', '12345678111', null, 'MASCULINO', null, '82458888', 'SC', 'BAIRRO DA DOIS', 'RUA MEIASEISSETE N586', '69', 'BRASILEIRO', 
'2001-12-20', '556699889874', '5566699668745', null);
INSERT INTO cliente (nome_cliente, email_cliente, cpf_cnpj_cliente, rg_cliente, sexo_cliente, profissao_cliente, cep_cliente, uf_cliente, bairro_cliente, endereco_cliente, codigo_municipio_cliente , nacionalidade, data_nascimento_cliente , telefone_cliente , celular_cliente , id_indicacao_cliente) VALUES ('JOSIAS DE SOUZA', 'JSSSSZ@EMAIL.COM', '12345670101', null, 'MASCULINO', null, '57888888', 'SC', 'BAIRRO DA NORTE', 'RUA LOUVA DEUS N156', '321', 'BRASILEIRO', 
'1999-01-22', '556687789874', '5566776668745', null);
INSERT INTO cliente (nome_cliente, email_cliente, cpf_cnpj_cliente, rg_cliente, sexo_cliente, profissao_cliente, cep_cliente, uf_cliente, bairro_cliente, endereco_cliente, codigo_municipio_cliente , nacionalidade, data_nascimento_cliente , telefone_cliente , celular_cliente , id_indicacao_cliente) VALUES ('MARQUINHOS RATO', 'MARQUINHOSRATO@EMAIL.COM', '12345671911', null, 'MASCULINO', null, '88018888', 'SC', 'BAIRRO DA SOCORRO', 'RUA PANDA N18', '1014', 'BRASILEIRO', 
'1955-12-17', '556688539874', '5566665368745', null);

INSERT INTO processo (numero_cnpj_processo, descricao_processo , titulo_processo , resultado_processo , data_criacao_processo , id_comarca_processo , id_assunto_processo , id_fase_processo , cpf_cnpj_cliente_processo , cpf_usuario_processo) VALUES ('112345678901', 'USUCAPIÃO', 'USUCAPIÃO - CARLINHOS DE JESUS', '3', '2023-06-26', '1', '1', '1', '12345678901', '1234567892');
INSERT INTO processo (numero_cnpj_processo, descricao_processo , titulo_processo , resultado_processo , data_criacao_processo , id_comarca_processo , id_assunto_processo , id_fase_processo , cpf_cnpj_cliente_processo , cpf_usuario_processo) VALUES ('123456780001181', 'COMPRA DE IMÓVEL', 'COMPRA DE IMÓVEL - PREGOS E CIA', '1', '2023-06-26', '1', '1', '1', '12345678000118', '1234567891');
INSERT INTO processo (numero_cnpj_processo, descricao_processo , titulo_processo , resultado_processo , data_criacao_processo , id_comarca_processo , id_assunto_processo , id_fase_processo , cpf_cnpj_cliente_processo , cpf_usuario_processo) VALUES ('120450789011', 'VENDA DE UM FUSCA', 'FUKA - ROMENILDO', '2', '2023-06-23', '1', '1', '1', '12045078901', '1234567892');
INSERT INTO processo (numero_cnpj_processo, descricao_processo , titulo_processo , resultado_processo , data_criacao_processo , id_comarca_processo , id_assunto_processo , id_fase_processo , cpf_cnpj_cliente_processo , cpf_usuario_processo) VALUES ('123456786011', 'COMPRA DE UM TERRENO', 'TERRENO - ROMEU', '1', '2023-06-21', '2', '2', '2', '12345678601', '1234567891');
INSERT INTO processo (numero_cnpj_processo, descricao_processo , titulo_processo , resultado_processo , data_criacao_processo , id_comarca_processo , id_assunto_processo , id_fase_processo , cpf_cnpj_cliente_processo , cpf_usuario_processo) VALUES ('123456102011', 'PROCESSO DE RETOMADA DE IMÓVEL', 'ALFRIDA', '4', '2023-05-26', '2', '2', '2', '12345610201', '1234567893');
INSERT INTO processo (numero_cnpj_processo, descricao_processo , titulo_processo , resultado_processo , data_criacao_processo , id_comarca_processo , id_assunto_processo , id_fase_processo , cpf_cnpj_cliente_processo , cpf_usuario_processo) VALUES ('123450789011', 'COMPRA DE KOMBI', 'KOMBI - JENOVEVA', '3', '2023-04-26', '1', '1', '1', '12345078901', '1234567893');
INSERT INTO processo (numero_cnpj_processo, descricao_processo , titulo_processo , resultado_processo , data_criacao_processo , id_comarca_processo , id_assunto_processo , id_fase_processo , cpf_cnpj_cliente_processo , cpf_usuario_processo) VALUES ('123456789111', 'TROCA DE IMÓVEL POR VEÍCULO', 'TROCA - CARLINHOS MAIA', '1', '2023-06-29', '3', '3', '3', '12345678911', '1234567892');
INSERT INTO processo (numero_cnpj_processo, descricao_processo , titulo_processo , resultado_processo , data_criacao_processo , id_comarca_processo , id_assunto_processo , id_fase_processo , cpf_cnpj_cliente_processo , cpf_usuario_processo) VALUES ('123456781111', 'COMPRA DE IMÓVEL', 'COMPRA IMOVEL - PEDRO SILVA', '1', '2023-04-26', '3', '3', '3', '12345678111', '1234567891');
INSERT INTO processo (numero_cnpj_processo, descricao_processo , titulo_processo , resultado_processo , data_criacao_processo , id_comarca_processo , id_assunto_processo , id_fase_processo , cpf_cnpj_cliente_processo , cpf_usuario_processo) VALUES ('123456701011', 'VENDA DE IMÓVEL', 'VENDA IMOVEL - JOSIAS', '2', '2023-04-01', '1', '1', '1', '12345670101', '1234567891');
INSERT INTO processo (numero_cnpj_processo, descricao_processo , titulo_processo , resultado_processo , data_criacao_processo , id_comarca_processo , id_assunto_processo , id_fase_processo , cpf_cnpj_cliente_processo , cpf_usuario_processo) VALUES ('123456719111', 'ALUGUEL DE IMÓVEL', 'ALUGUEL - MARQUINHOS RATO', '2', '2023-05-26', '2', '2', '2', '12345671911', '1234567891');

INSERT INTO tarefa (funcao_tarefa , detalhes_tarefa , data_criacao_tarefa, id_processo_tarefa) VALUES ('RELATÓRIO DE USO', 'RELATÓRIO DE USO DE IMÓVEL', '2023-06-27', '1');
INSERT INTO tarefa (funcao_tarefa , detalhes_tarefa , data_criacao_tarefa, id_processo_tarefa) VALUES ('PROVAS DA POSSE', 'JUNTAR PROVAS DA POSSE DO IMOVEL', '2023-06-27', '1');
INSERT INTO tarefa (funcao_tarefa , detalhes_tarefa , data_criacao_tarefa, id_processo_tarefa) VALUES ('HONORARIOS', 'CONTRATO COM HONORARIOS DO ADVOGADO', '2023-06-27', '1');
INSERT INTO tarefa (funcao_tarefa , detalhes_tarefa , data_criacao_tarefa, id_processo_tarefa) VALUES ('CONTRATO', 'CRIAR CONTRATO DE COMPRA', '2023-06-27', '2');
INSERT INTO tarefa (funcao_tarefa , detalhes_tarefa , data_criacao_tarefa, id_processo_tarefa) VALUES ('HONORARIOS', 'CONTRATO COM HONORARIOS DO ADVOGADO', '2023-06-27', '2');
INSERT INTO tarefa (funcao_tarefa , detalhes_tarefa , data_criacao_tarefa, id_processo_tarefa) VALUES ('CONTRATO', 'CRIAR CONTRATO DE VENDA', '2023-06-25', '3');
INSERT INTO tarefa (funcao_tarefa , detalhes_tarefa , data_criacao_tarefa, id_processo_tarefa) VALUES ('PROCURAÇÃO', 'PROCURAÇÃO PARA NEGOCIAÇÃO', '2023-06-26', '3');
INSERT INTO tarefa (funcao_tarefa , detalhes_tarefa , data_criacao_tarefa, id_processo_tarefa) VALUES ('HONORARIOS', 'CONTRATO COM HONORARIOS DO ADVOGADO', '2023-06-27', '3');
INSERT INTO tarefa (funcao_tarefa , detalhes_tarefa , data_criacao_tarefa, id_processo_tarefa) VALUES ('CONTRATO', 'CRIAR CONTRATO DE COMPRA', '2023-06-27', '4');
INSERT INTO tarefa (funcao_tarefa , detalhes_tarefa , data_criacao_tarefa, id_processo_tarefa) VALUES ('HONORARIOS', 'CONTRATO COM HONORARIOS DO ADVOGADO', '2023-06-27', '4');

INSERT INTO relacionado (cpf_usuario_relacionado, id_tarefa_relacionado ) VALUES ('1234567895', '1');
INSERT INTO relacionado (cpf_usuario_relacionado, id_tarefa_relacionado ) VALUES ('1234567892', '2');
INSERT INTO relacionado (cpf_usuario_relacionado, id_tarefa_relacionado ) VALUES ('1234567892', '3');
INSERT INTO relacionado (cpf_usuario_relacionado, id_tarefa_relacionado ) VALUES ('1234567895', '4');
INSERT INTO relacionado (cpf_usuario_relacionado, id_tarefa_relacionado ) VALUES ('1234567891', '5');
INSERT INTO relacionado (cpf_usuario_relacionado, id_tarefa_relacionado ) VALUES ('1234567895', '6');
INSERT INTO relacionado (cpf_usuario_relacionado, id_tarefa_relacionado ) VALUES ('1234567892', '7');
INSERT INTO relacionado (cpf_usuario_relacionado, id_tarefa_relacionado ) VALUES ('1234567892', '8');
INSERT INTO relacionado (cpf_usuario_relacionado, id_tarefa_relacionado ) VALUES ('1234567895', '9');
INSERT INTO relacionado (cpf_usuario_relacionado, id_tarefa_relacionado ) VALUES ('1234567891', '10');
```

- Necessário dar update na senha para encriptar para poder usar este usuário.

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

```bash
  docker stop NOMECONTAINER
  ```
```bash
  docker system prune
  ```
