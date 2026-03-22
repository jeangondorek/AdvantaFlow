import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ComarcaService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.comarca.findMany();
  }

  async create(data: any) {
    return this.prisma.comarca.create({ data });
  }

  async findById(id: number) {
    return this.prisma.comarca.findUnique({ where: { id } });
  }
}
