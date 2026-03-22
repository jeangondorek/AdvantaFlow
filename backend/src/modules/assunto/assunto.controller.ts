import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { AssuntoService } from './assunto.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('assuntos')
export class AssuntoController {
  constructor(private readonly assuntoService: AssuntoService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return this.assuntoService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() data: any) {
    return this.assuntoService.create(data);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findById(@Param('id') id: number) {
    return this.assuntoService.findById(Number(id));
  }
}
