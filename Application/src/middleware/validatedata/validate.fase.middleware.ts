import { Fase } from "../../models/fase.model";

export function validateFase(fase: Fase): string[] {
  const errors: string[] = [];

  function isString(value: any, minLength: number, maxLength: number): boolean {
    return typeof value === 'string' && value.length >= minLength && value.length <= maxLength;
  }

  if (!isString(fase.descricao_fase, 2, 100)) {
    errors.push('A descricao_fase deve ter entre 2 e 100 caracteres.');
  }

  return errors;
}
