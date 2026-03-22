import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { IndicacaoService } from './indicacao.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('indicacoes')
export class IndicacaoController {
  constructor(private readonly indicacaoService: IndicacaoService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return this.indicacaoService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() data: any) {
    return this.indicacaoService.create(data);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findById(@Param('id') id: number) {
    return this.indicacaoService.findById(Number(id));
  }
}
