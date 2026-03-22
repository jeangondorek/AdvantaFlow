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
    if (!user) {
      console.error('Usuário não encontrado para CPF:', cpf);
      return null;
    }
    let senhaOk = false;
    try {
      senhaOk = await bcrypt.compare(senha, user.senha);
    } catch (e) {
      console.error('Erro ao comparar senha:', e);
      return null;
    }
    if (!senhaOk) {
      console.error('Senha inválida para CPF:', cpf);
      return null;
    }
    const { senha: _, ...result } = user;
    return result;
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
