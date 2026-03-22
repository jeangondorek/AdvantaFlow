import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class FaseService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.fase.findMany();
  }

  async create(data: any) {
    return this.prisma.fase.create({ data });
  }

  async findById(id: number) {
    return this.prisma.fase.findUnique({ where: { id } });
  }
}
