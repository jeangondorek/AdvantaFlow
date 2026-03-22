import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { ComarcaService } from './comarca.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('comarcas')
export class ComarcaController {
  constructor(private readonly comarcaService: ComarcaService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return this.comarcaService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() data: any) {
    return this.comarcaService.create(data);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findById(@Param('id') id: number) {
    return this.comarcaService.findById(Number(id));
  }
}
