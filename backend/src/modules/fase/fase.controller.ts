import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { FaseService } from './fase.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('fases')
export class FaseController {
  constructor(private readonly faseService: FaseService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return this.faseService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() data: any) {
    return this.faseService.create(data);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findById(@Param('id') id: number) {
    return this.faseService.findById(Number(id));
  }
}
