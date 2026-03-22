import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findByCpf(cpf: string) {
    return this.prisma.usuario.findUnique({ where: { cpf } });
  }

  async findAll() {
    return this.prisma.usuario.findMany();
  }

  async create(data: any) {
    const hashed = await bcrypt.hash(data.senha, 10);
    return this.prisma.usuario.create({
      data: { ...data, senha: hashed },
    });
  }

  async findById(id: number) {
    return this.prisma.usuario.findUnique({ where: { cpf: id } });
  }
}
