import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(cpf: string, senha: string) {
    const user = await this.usersService.findByCpf(cpf);
    if (user && await bcrypt.compare(senha, user.senha)) {
      const { senha, ...result } = user;
      return result;
    }
    return null;
  }

  async login(cpf: string, senha: string) {
    const user = await this.validateUser(cpf, senha);
    if (!user) throw new UnauthorizedException('Credenciais inválidas');
    const payload = { sub: user.id, perfil: user.perfilId };
    return {
      access_token: this.jwtService.sign(payload),
      user,
    };
  }
}
