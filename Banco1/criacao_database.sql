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
    data_nascimento_cliente DATE null,
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
    data_criacao_processo DATE not null,
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
    data_criacao_tarefa DATE not null,
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
    data_carregamento_anexo DATE,
    caminho_arquivo_anexo varchar(200),
    constraint pk_anexo primary key (id_anexo),
    constraint fk_anexo_tarefa foreign key (id_tarefa_anexo) references tarefa(id_tarefa)
);