import { Execucao } from "../../models/execucao.model";

export function validateExecucao(execucao: Execucao): string[] {
  const errors: string[] = [];

  function isString(value: any, minLength: number, maxLength: number): boolean {
    return typeof value === 'string' && value.length >= minLength && value.length <= maxLength;
  }

  function isInt(value: any): boolean {
    return Number.isInteger(value);
  }
  
  if (!isString(execucao.cpf_usuario_execucao, 11, 11)) {
    errors.push('O cpf_usuario_execucao deve ter exatamente 11 caracteres.');
  }

  if (!isInt(execucao.id_processo_execucao)) {
    errors.push('O id_processo_execucao deve ser um número inteiro.');
  }

  return errors;
}
