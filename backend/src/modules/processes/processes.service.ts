import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ProcessesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.processo.findMany();
  }

  async create(data: any) {
    return this.prisma.processo.create({ data });
  }

  async findById(id: number) {
    return this.prisma.processo.findUnique({ where: { id } });
  }
}
