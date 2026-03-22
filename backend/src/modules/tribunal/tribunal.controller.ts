import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { TribunalService } from './tribunal.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('tribunais')
export class TribunalController {
  constructor(private readonly tribunalService: TribunalService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return this.tribunalService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() data: any) {
    return this.tribunalService.create(data);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findById(@Param('id') id: number) {
    return this.tribunalService.findById(Number(id));
  }
}
