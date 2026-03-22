import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class DashboardService {
  constructor(private readonly prisma: PrismaService) {}

  async getMetrics() {
    const processos = await this.prisma.processo.count();
    const tarefas = await this.prisma.tarefa.count();
    const clientes = await this.prisma.cliente.count();
    return { processos, tarefas, clientes };
  }
}
