export class Cliente {
  nome_cliente: string;
  email_cliente: string;
  cpf_cnpj_cliente: string;
  rg_cliente: string | null;
  sexo_cliente: string | null;
  profissao_cliente: string | null;
  cep_cliente: string;
  uf_cliente: string;
  bairro_cliente: string;
  endereco_cliente: string;
  codigo_municipio_cliente: string;
  nacionalidade: string | null;
  data_nascimento_cliente: string | null;
  telefone_cliente: string | null;
  celular_cliente: string;
  id_indicacao_cliente: number | null;

  constructor(data: any) {
    this.nome_cliente = data.nome_cliente;
    this.email_cliente = data.email_cliente;
    this.cpf_cnpj_cliente = data.cpf_cnpj_cliente;
    this.rg_cliente = data.rg_cliente || null;
    this.sexo_cliente = data.sexo_cliente || null;
    this.profissao_cliente = data.profissao_cliente || null;
    this.cep_cliente = data.cep_cliente;
    this.uf_cliente = data.uf_cliente;
    this.bairro_cliente = data.bairro_cliente;
    this.endereco_cliente = data.endereco_cliente;
    this.codigo_municipio_cliente = data.codigo_municipio_cliente;
    this.nacionalidade = data.nacionalidade || null;
    this.data_nascimento_cliente = data.data_nascimento_cliente || null;
    this.telefone_cliente = data.telefone_cliente || null;
    this.celular_cliente = data.celular_cliente;
    this.id_indicacao_cliente = data.id_indicacao_cliente || null;
  }
}
