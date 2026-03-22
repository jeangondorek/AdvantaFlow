import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ProfilesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.perfil.findMany();
  }

  async create(data: any) {
    return this.prisma.perfil.create({ data });
  }

  async findById(id: number) {
    return this.prisma.perfil.findUnique({ where: { id } });
  }
}
