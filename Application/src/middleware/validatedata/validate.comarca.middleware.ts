import { Comarca } from "../../models/comarca.model";

export function validateComarca(comarca: Comarca): string[] {
  const errors: string[] = [];

  function isString(value: any, minLength: number, maxLength: number): boolean {
    return typeof value === 'string' && value.length >= minLength && value.length <= maxLength;
  }

  if (!isString(comarca.descricao_comarca, 1, 100)) {
    errors.push('A descricao_comarca deve ter entre 1 e 100 caracteres.');
  }

  return errors;
}
