import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationsService {
  async notify(message: string) {
    // Simulação: em produção, enviar notificação real
    return { status: 'ok', message };
  }
}
