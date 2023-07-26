import { Assunto } from "../../models/assunto.model";

export function validateAssunto(assunto: Assunto): string[] {
    const errors: string[] = [];
  
    if (typeof assunto.descricao_assunto !== 'string') {
      errors.push('A descrição_assunto deve ser uma string.');
    }

    const MIN_DESCRICAO_LENGTH = 3;
    const MAX_DESCRICAO_LENGTH = 100;
    if (
      assunto.descricao_assunto.length < MIN_DESCRICAO_LENGTH ||
      assunto.descricao_assunto.length > MAX_DESCRICAO_LENGTH
    ) {
      errors.push('A descrição_assunto deve ter entre 3 e 100 caracteres.');
    }
  
    return errors;
  }
  