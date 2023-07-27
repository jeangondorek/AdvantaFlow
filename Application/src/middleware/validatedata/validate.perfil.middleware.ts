import { Perfil } from "../../models/perfil.model";

export function validatePerfil(perfil: Perfil): string[] {
  const errors: string[] = [];

  function isString(value: any, minLength: number, maxLength: number): boolean {
    return typeof value === 'string' && value.length >= minLength && value.length <= maxLength;
  }

  if (!isString(perfil.descricao_perfil, 1, 150)) {
    errors.push('A descricao_perfil deve ter entre 1 e 150 caracteres.');
  }

  if (!isString(perfil.permissoes_perfil, 1, 30)) {
    errors.push('As permissoes_perfil devem ter entre 1 e 30 caracteres.');
  }

  if (perfil.permissoes_opcional_perfil && !isString(perfil.permissoes_opcional_perfil, 1, 30)) {
    errors.push('As permissoes_opcional_perfil devem ter entre 1 e 30 caracteres.');
  }

  return errors;
}
