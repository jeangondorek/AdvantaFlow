create schema advsystem;

create table advsystem.users(
    cpf primary key,
    name text not null,
    email text not null,
    createdAt timestamp default now()
)

create table advsystem.advogados(
    oab primary key,
    name text not null,
    email text not null,
    createdAt timestamp default now()
)