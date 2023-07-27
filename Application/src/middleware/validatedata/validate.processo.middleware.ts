import { Processo } from "../../models/processo.model";

export function validateProcesso(processo: Processo): string[] {
  const errors: string[] = [];

  function isString(value: any, minLength: number, maxLength: number): boolean {
    return typeof value === 'string' && value.length >= minLength && value.length <= maxLength;
  }

  function isInt(value: any): boolean {
    return Number.isInteger(value);
  }

  function isValidDate(value: any): boolean {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(value)) return false;

    const date = new Date(value);
    return !isNaN(date.getTime());
  }

  if (!isString(processo.numero_cnpj_processo, 1, 20)) {
    errors.push('O numero_cnpj_processo deve ter entre 1 e 20 caracteres.');
  }

  if (!isString(processo.descricao_processo, 1, 100)) {
    errors.push('A descricao_processo deve ter entre 1 e 100 caracteres.');
  }

  if (!isString(processo.titulo_processo, 1, 50)) {
    errors.push('O titulo_processo deve ter entre 1 e 50 caracteres.');
  }

  if (processo.resultado_processo && !isString(processo.resultado_processo, 1, 50)) {
    errors.push('O resultado_processo deve ter até 50 caracteres.');
  }

  if (!isValidDate(processo.data_criacao_processo)) {
    errors.push('A data_criacao_processo deve ser uma data válida no formato "YYYY-MM-DD".');
  }

  if (!isInt(processo.id_comarca_processo)) {
    errors.push('O id_comarca_processo deve ser um número inteiro.');
  }

  if (!isInt(processo.id_assunto_processo)) {
    errors.push('O id_assunto_processo deve ser um número inteiro.');
  }

  if (!isInt(processo.id_fase_processo)) {
    errors.push('O id_fase_processo deve ser um número inteiro.');
  }

  if (!isString(processo.cpf_cnpj_cliente_processo, 11, 14)) {
    errors.push('O cpf_cnpj_cliente_processo deve ter exatamente 14 caracteres.');
  }

  if (!isString(processo.cpf_usuario_processo, 10, 11)) {
    errors.push('O cpf_usuario_processo deve ter exatamente 11 caracteres.');
  }

  return errors;
}
