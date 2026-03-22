import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.tarefa.findMany();
  }

  async create(data: any) {
    return this.prisma.tarefa.create({ data });
  }

  async findById(id: number) {
    return this.prisma.tarefa.findUnique({ where: { id } });
  }
}
