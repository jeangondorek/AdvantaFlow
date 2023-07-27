import { Cliente } from "../../models/cliente.model";

export function validateCliente(cliente: Cliente, cpf_cnpj_cliente: string): string[] {
  const errors: string[] = [];

  function isString(value: any, minLength: number, maxLength: number): boolean {
    return typeof value === 'string' && value.length >= minLength && value.length <= maxLength;
  }

  function isValidDate(value: any): boolean {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(value)) return false;

    const date = new Date(value);
    return !isNaN(date.getTime());
  }

  if (!isString(cliente.nome_cliente, 1, 40)) {
    errors.push('O nome_cliente deve ter entre 1 e 40 caracteres.');
  }

  if (!isString(cliente.email_cliente, 1, 50) || !cliente.email_cliente.includes('@')) {
    errors.push('O email_cliente deve ter entre 1 e 50 caracteres e ser um endereço de email válido.');
  }

  if(!cpf_cnpj_cliente){
    if (!isString(cliente.cpf_cnpj_cliente, 11, 14)) {
      errors.push('O cpf_cnpj_cliente deve ter 11 ou 14 caracteres.');
    }
  }

  if (cliente.rg_cliente && !isString(cliente.rg_cliente, 1, 10)) {
    errors.push('O rg_cliente deve ter entre 1 e 10 caracteres.');
  }

  if (cliente.sexo_cliente && !isString(cliente.sexo_cliente, 1, 100)) {
    errors.push('O sexo_cliente deve ter até 100 caracteres.');
  }

  if (cliente.profissao_cliente && !isString(cliente.profissao_cliente, 1, 40)) {
    errors.push('A profissao_cliente deve ter até 40 caracteres.');
  }

  if (!isString(cliente.cep_cliente, 8, 8)) {
    errors.push('O cep_cliente deve ter exatamente 8 caracteres.');
  }

  if (!isString(cliente.uf_cliente, 2, 2)) {
    errors.push('O uf_cliente deve ter exatamente 2 caracteres.');
  }

  if (!isString(cliente.bairro_cliente, 1, 30)) {
    errors.push('O bairro_cliente deve ter entre 1 e 30 caracteres.');
  }

  if (!isString(cliente.endereco_cliente, 1, 30)) {
    errors.push('O endereco_cliente deve ter entre 1 e 30 caracteres.');
  }

  if (!isString(cliente.codigo_municipio_cliente, 1, 7)) {
    errors.push('O codigo_municipio_cliente deve ter entre 1 e 7 caracteres.');
  }

  if (cliente.nacionalidade && !isString(cliente.nacionalidade, 1, 30)) {
    errors.push('A nacionalidade deve ter até 30 caracteres.');
  }

  if (cliente.data_nascimento_cliente && !isValidDate(cliente.data_nascimento_cliente)) {
    errors.push('A data_nascimento_cliente deve ser uma data válida no formato "YYYY-MM-DD".');
  }

  if (cliente.telefone_cliente && !isString(cliente.telefone_cliente, 1, 14)) {
    errors.push('O telefone_cliente deve ter até 14 caracteres.');
  }

  if (!isString(cliente.celular_cliente, 1, 14)) {
    errors.push('O celular_cliente deve ter até 14 caracteres.');
  }

  return errors;
}
