import { Indicacao } from "../../models/indicacao.model";

export function validateIndicacao(indicacao: Indicacao): string[] {
  const errors: string[] = [];

  function isString(value: any, minLength: number, maxLength: number): boolean {
    return typeof value === 'string' && value.length >= minLength && value.length <= maxLength;
  }

  if (!isString(indicacao.descricao_indicacao, 1, 100)) {
    errors.push('A descricao_indicacao deve ter entre 1 e 100 caracteres.');
  }

  if (indicacao.detalhes_indicacao && !isString(indicacao.detalhes_indicacao, 1, 300)) {
    errors.push('Os detalhes_indicacao devem ter até 300 caracteres.');
  }

  return errors;
}
