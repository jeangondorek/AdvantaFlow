-- extensão do postgres que que realiza operações de hash
-- para inserir uma senha utilizando a extensão, é necessário usar a função crypt("Senha", gen_salt("bf"))
-- gel_salt é para especificar o algoritimo hash que vai ser utilizado, nesse caso é o  blowfish
-- para buscar uma senha é só utilizar na condição do select a função crypt
-- ex: where senha_hash = crypt('senha123', senha_hash);
create database projetointegrador;

create extension pgcrypto;

create table perfil (
    id serial not null,
    descricao varchar(150) not null,
    permissoes varchar(30) not null,
    permissoes_opcional varchar(30) null,
    constraint pk_perfil primary key (id)
);

create table comarca (
    id serial not null,
    descricao varchar(100) not null,
    constraint pk_comarca primary key (id)
);


create table assunto (
    id serial not null,
    descricao varchar(100) not null,
    constraint pk_assunto primary key (id)
);


create table fase (
    id serial not null,
    descricao varchar(100) not null,
    constraint pk_fase primary key (id)
);

create table usuario (
    cpf varchar(11) not null,
    nome varchar(40) not null,
    status varchar(10) default 'Ativo',
    telefone varchar(20) not null,
    oab varchar (30) null, -- valor padrão é nullo mas vamos manter um padrão especificando pra ficar mais ligível.
    senha_hash varchar(20) not null,
    id_perfil integer not null,
    constraint pk_usuario primary key (cpf),
    constraint fk_usuario_perfil foreign key (id_perfil) references perfil(id)
);

create table processo (
    id serial not null,
    numero_processo_cnpj varchar(20) not null,
    descricao varchar(100) not null,
    titulo varchar(50) not null,
    resultado varchar(50),
    data_criacao timestamp not null,
    id_comarca integer not null,
    id_assunto integer not null,
    id_fase integer not null,
    constraint pk_processo primary key (id),
    constraint fk_processo_comarca foreign key (id_comarca) references comarca(id),
    constraint fk_processo_assunto foreign key (id_assunto) references assunto(id),
    constraint fk_processo_fase foreign key (id_fase) references fase(id)
);


create table execucao (
    id serial not null,
    cpf_usuario varchar(11) not null,
    id_processo integer not null,
    constraint pk_execucao primary key (id),
    constraint fk_execucao_usuario foreign key (cpf_usuario) references usuario(cpf),
    constraint fk_execucao_processo foreign key (id_processo) references processo(id)
);


create table tarefa (
    id serial not null,
    funcao varchar(50) not null,
    detalhes TEXT,
    data_criacao timestamp not null,
    id_processo integer not null,
    constraint pk_tarefa primary key (id),
    constraint fk_tarefa_processo foreign key (id_processo) references processo(id)
);


create table relacionado (
    id serial not null,
    cpf_usuario varchar(11) not null,
    id_tarefa integer not null,
    constraint pk_relacionado primary key (id),
    constraint fk_relacionado_usuario foreign key (cpf_usuario) references usuario(cpf),
    constraint fk_relacionado_tarefa foreign key (id_tarefa) references tarefa(id)
);


create table anexo (
    id serial not null,
    id_tarefa integer not null,
    nome varchar(100),
    formato varchar(10),
    tamanho integer,
    data_carregamento timestamp,
    caminho_arquivo varchar(200),
    constraint pk_anexo primary key (id),
    constraint fk_anexo_tarefa foreign key (id_tarefa) references tarefa(id)
);
