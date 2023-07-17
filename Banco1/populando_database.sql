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