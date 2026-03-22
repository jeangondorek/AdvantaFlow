import { Injectable } from '@nestjs/common';

@Injectable()
export class PasswordService {
  async recover(email: string) {
    // Simulação: em produção, enviar email real
    return { message: `Instruções de recuperação enviadas para ${email}` };
  }
}
