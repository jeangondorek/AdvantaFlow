import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from '../../middleware/roles.decorator';
import { RoleGuard } from '../../middleware/role.guard';

@Controller('clientes')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles('admin', 'advogado')
  @Get()
  async findAll() {
    return this.clientsService.findAll();
  }

  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles('admin', 'advogado')
  @Post()
  async create(@Body() data: any) {
    return this.clientsService.create(data);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':cpf')
  async findByCpf(@Param('cpf') cpf: string) {
    return this.clientsService.findByCpf(cpf);
  }
}
