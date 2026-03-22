import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ClientsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.cliente.findMany();
  }

  async create(data: any) {
    return this.prisma.cliente.create({ data });
  }

  async findByCpf(cpf: string) {
    return this.prisma.cliente.findFirst({ where: { cpf: cpf } as any });
  }
}
