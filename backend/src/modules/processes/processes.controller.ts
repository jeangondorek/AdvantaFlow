import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { ProcessesService } from './processes.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from '../../middleware/roles.decorator';
import { RoleGuard } from '../../middleware/role.guard';

@Controller('processos')
export class ProcessesController {
  constructor(private readonly processesService: ProcessesService) {}

  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles('admin', 'advogado')
  @Get()
  async findAll() {
    return this.processesService.findAll();
  }

  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles('admin', 'advogado')
  @Post()
  async create(@Body() data: any) {
    return this.processesService.create(data);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findById(@Param('id') id: number) {
    return this.processesService.findById(Number(id));
  }
}
