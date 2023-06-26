# Requisitos funcionais

| ID  | REQUISITO FUNCIONAL  | TIPO DE USUÁRIO DO SISTEMA  | DESCRIÇÃO DO REQUISITO FUNCIONA  |
|---|---|---|---|
| RF01  | Manter Usuário  | Administrador  | O sistema deverá permitir que somente o administrador cadastre usuários na plataforma. Os dados necessários são: nome, cpf, oab(se advogado), email, fone, perfil (ex: perfil advogado, estagiário, administrador), senha e confirmação de senha. Ao gravar o sistema deverá registrar a data do cadastro e adicionar um campo de status(ativo/inativo).|
|  RF02 |  Manter Perfil | Administrador  | Cada perfil tem regras de permissões(o que pode ou não ser acessado). É alterado pelo administrador do sistema.  |
| RF03  | Efetuar Login  | Usuário  | Para acessar o sistema o usuário deverá informar seu email ou username e senha. As informações serão apresentadas de acordo com o perfil. Deverão ser registradas todas as operações dos usuários do sistema, mantendo histórico de logs na plataforma, e permitindo voltar à versão anterior.|
|RF04 |Esqueci minha senha|Usuário|Caso o usuário esqueça a senha poderá solicitar o cadastro de uma nova senha através da tela de login. O usuário deve informar o e-mail, caso exista no banco de dados do sistema, deve ser feito link via email para o cadastro da nova senha. O link irá gerar uma tela onde ele poderá colocar a senha e confirmar a senha.|
|RF05|Sair do sistema|Usuário|Permitir usuário deslogar do sistema, impossibilitando qualquer acesso às funcionalidades até que um novo login seja realizado. |
|RF06|Tela inicial|Perfil|Deve conter um menu possibilitando navegar através das “telas” existentes no sistema. Terá um dashboard onde será possível visualizar as informações referente aos processos (Quantidade de processos concluídos, em andamento…) e também referente às tarefas relacionadas a cada processo.|
|RF07|Manter tarefa|Usuário|Para criar uma nova tarefa deve ser necessário existir um processo criado, esse processo pode estar com seu status como por exemplo, novo em andamento ou finalizado. Processos já finalizados não será possível realizar a criação de uma nova tarefa, somente em casos de processos reabertos. Cada tarefa poderá conter uma descrição contendo informações úteis, quem vai trabalhar na tarefa, responsável pela tarefa, função que deverá ser efetuada (Vai depender da fase que consta o processo). Também vai possibilitar anexar arquivos a cada tarefa. Ao efetuar alteração na tarefa, deve ser registrado os campos modificados em uma aba separada, porém na mesma tela. Essas modificações vão ser por tarefas, mantendo um histórico dos documentos anexados, alteração de status e data. Também deve registrar a data e hora da modificação e o usuário que efetuou.|
|RF08|Manter cliente|Usuário|Tipo de pessoa (Física ou jurídica), CPF/CNPJ, nome, rg, data de nascimento, profissão, sexo, nacionalidade, celular, telefone, email, cep, uf, código do município, endereço, bairro, número e origem (Indicação cliente, facebook, instagram, anuncio…)|
|RF09|Manter processo|Usuário|Para criar um novo processo o usuário deve possuir OAB ou acesso liberado através do seu perfil. Cada processo possui um número identificador gerado automaticamente pelo sistema, número do processo-cnpj (0015703-84.2017.8.16.0185), título, cliente. Data de criação gerada automaticamente pelo sistema e a data de conclusão. Resultado do processo (Processo ganho ou perdido).|
|RF10|Manter assuntos/tags do processo|Usuário|Criação de tags para identificar o assunto do processo (disputas de propriedades, cobrança de aluguel, despejos, entre outros tipos de tags que serão criadas pelo usuário), cada processo deve possuir um ou mais advogados e o cliente vinculado ao processo. |
|RF11|Manter comarca e tribunal do processo|Usuário|Criação da comarca (local em que o juiz irá exercer sua jurisdição), vara e tribunal (STF, STJ, JFAL…).|
|RF12|Manter fase do processo|Usuário|Fase do processo (Consultoria, negociação, judicial, recursal e, execução/cobrança)|
|RF13|Feedback ao cliente|Usuário|Disponibilizar checkbox para envio de e-mail ao cliente referente ao processo criado.|

---

## Projeto Conceitual
![projetoConceitual](https://github.com/jeangondorek/Prog2Project/assets/80592079/c31a316a-4598-4cf4-9c4f-aed8f3d7e2d3)

---

## Projeto Lógico
![image](https://github.com/jeangondorek/Prog2Project/assets/80592079/26c5d108-1790-4fc5-b2a1-621151426d67)

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
    telefone_cliente varchar(14) not null,
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
    cpf_cnpj_cliente_processo varchar not null,
    cpf_usuario_processo varchar not null,
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

## Projeto rodadando em um docker com postgres

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
