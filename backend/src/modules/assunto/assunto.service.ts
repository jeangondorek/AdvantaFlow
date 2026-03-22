import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class AssuntoService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.assunto.findMany();
  }

  async create(data: any) {
    return this.prisma.assunto.create({ data });
  }

  async findById(id: number) {
    return this.prisma.assunto.findUnique({ where: { id } });
  }
}
