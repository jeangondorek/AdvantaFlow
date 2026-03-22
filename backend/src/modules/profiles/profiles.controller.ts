import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from '../../middleware/roles.decorator';
import { RoleGuard } from '../../middleware/role.guard';

@Controller('perfis')
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}

  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles('admin')
  @Get()
  async findAll() {
    return this.profilesService.findAll();
  }

  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles('admin')
  @Post()
  async create(@Body() data: any) {
    return this.profilesService.create(data);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findById(@Param('id') id: number) {
    return this.profilesService.findById(Number(id));
  }
}
