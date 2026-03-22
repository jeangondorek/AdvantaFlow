import { Controller, Post, Body } from '@nestjs/common';
import { PasswordService } from './password.service';

@Controller('auth')
export class PasswordController {
  constructor(private readonly passwordService: PasswordService) {}

  @Post('password-recovery')
  async recover(@Body('email') email: string) {
    return this.passwordService.recover(email);
  }
}
