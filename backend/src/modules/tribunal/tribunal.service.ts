import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class TribunalService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.tribunal.findMany();
  }

  async create(data: any) {
    return this.prisma.tribunal.create({ data });
  }

  async findById(id: number) {
    return this.prisma.tribunal.findUnique({ where: { id } });
  }
}
