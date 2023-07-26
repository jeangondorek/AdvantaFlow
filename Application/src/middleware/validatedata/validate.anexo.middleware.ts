import { Anexo } from "../../models/anexo.model";

export function validateAnexo(anexo: Anexo): string[] {
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

  if (!isInt(anexo.id_tarefa_anexo)) {
    errors.push('O id_tarefa_anexo deve ser um número inteiro.');
  }

  if (!isString(anexo.nome_anexo, 3, 100)) {
    errors.push('O nome_anexo deve ter entre 3 e 100 caracteres.');
  }

  if (!isString(anexo.formato_anexo, 2, 10)) {
    errors.push('O formato_anexo deve ter entre 2 e 10 caracteres.');
  }

  if (!isInt(anexo.tamanho_anexo)) {
    errors.push('O tamanho_anexo deve ser um número inteiro.');
  }

  if (!isString(anexo.caminho_arquivo_anexo, 5, 200) || !anexo.caminho_arquivo_anexo.includes('/')) {
    errors.push('O caminho_arquivo_anexo deve ter entre 5 e 200 caracteres e conter um caractere "/".');
  }

  if (!isValidDate(anexo.data_carregamento_anexo)) {
    errors.push('A data_carregamento_anexo deve ser uma data válida no formato "YYYY-MM-DD".');
  }

  return errors;
}
