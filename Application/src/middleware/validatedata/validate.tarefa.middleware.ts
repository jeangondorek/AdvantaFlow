import { Tarefa } from "../../models/tarefa.model";

export function validateTarefa(tarefa: Tarefa): string[] {
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

  if (!isString(tarefa.funcao_tarefa, 1, 50)) {
    errors.push('A funcao_tarefa deve ter entre 1 e 50 caracteres.');
  }

  if (tarefa.detalhes_tarefa && !isString(tarefa.detalhes_tarefa, 1, Infinity)) {
    errors.push('Os detalhes_tarefa devem ser uma string válida.');
  }

  if (!isValidDate(tarefa.data_criacao_tarefa)) {
    errors.push('A data_criacao_tarefa deve ser uma data válida no formato "YYYY-MM-DD".');
  }

  if (!isInt(tarefa.id_processo_tarefa)) {
    errors.push('O id_processo_tarefa deve ser um número inteiro.');
  }

  return errors;
}
