import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class IndicacaoService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.indicacao.findMany();
  }

  async create(data: any) {
    return this.prisma.indicacao.create({ data });
  }

  async findById(id: number) {
    return this.prisma.indicacao.findUnique({ where: { id } });
  }
}
