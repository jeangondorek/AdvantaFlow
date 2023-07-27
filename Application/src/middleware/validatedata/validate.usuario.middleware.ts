import { Usuario } from "../../models/usuario.model";

export function validateUsuario(usuario: Usuario): string[] {
  const errors: string[] = [];

  function isString(value: any, minLength: number, maxLength: number): boolean {
    return typeof value === 'string' && value.length >= minLength && value.length <= maxLength;
  }

  function isValidCpf(value: any): boolean {
    const cpfRegex = /^\d{11}$/;
    if (!cpfRegex.test(value)) return false;

    // Implemente a lógica de validação do CPF aqui se desejar.
    // Por simplicidade, este exemplo apenas verifica o formato do CPF.
    return true;
  }

  if (!isValidCpf(usuario.cpf_usuario)) {
    errors.push('O cpf_usuario deve ser um CPF válido (11 dígitos numéricos).');
  }

  if (!isString(usuario.nome_usuario, 1, 40)) {
    errors.push('O nome_usuario deve ter entre 1 e 40 caracteres.');
  }

  if (!isString(usuario.status_usuario, 1, 10)) {
    errors.push('O status_usuario deve ter entre 1 e 10 caracteres.');
  }

  if (!isString(usuario.telefone_usuario, 1, 20)) {
    errors.push('O telefone_usuario deve ter entre 1 e 20 caracteres.');
  }

  if (usuario.oab_usuario && !isString(usuario.oab_usuario, 1, 30)) {
    errors.push('O oab_usuario deve ter até 30 caracteres.');
  }

  if (!isString(usuario.senha_hash_usuario, 1, 60)) {
    errors.push('A senha_hash_usuario deve ter até 60 caracteres.');
  }

  if (!Number.isInteger(usuario.id_perfil_usuario)) {
    errors.push('O id_perfil_usuario deve ser um número inteiro.');
  }

  return errors;
}
