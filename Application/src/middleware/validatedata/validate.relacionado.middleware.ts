import { Relacionado } from "../../models/relacionado.model";

export function validateRelacionado(relacionado: Relacionado): string[] {
  const errors: string[] = [];

  function isString(value: any, minLength: number, maxLength: number): boolean {
    return typeof value === 'string' && value.length >= minLength && value.length <= maxLength;
  }

  function isInt(value: any): boolean {
    return Number.isInteger(value);
  }

  if (!isString(relacionado.cpf_usuario_relacionado, 10, 11)) {
    errors.push('O cpf_usuario_relacionado deve ter exatamente 11 caracteres.');
  }

  if (!isInt(relacionado.id_tarefa_relacionado)) {
    errors.push('O id_tarefa_relacionado deve ser um número inteiro.');
  }

  return errors;
}
