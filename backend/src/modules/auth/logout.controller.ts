import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class LogoutController {
  @UseGuards(JwtAuthGuard)
  @Post('logout')
  async logout(@Req() req) {
    // Para JWT stateless, logout é feito no frontend (remover token)
    // Aqui pode-se implementar blacklist se necessário
    return { message: 'Logout realizado com sucesso' };
  }
}
