import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from '../../middleware/roles.decorator';
import { RoleGuard } from '../../middleware/role.guard';

@Controller('tarefas')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles('admin', 'advogado')
  @Get()
  async findAll() {
    return this.tasksService.findAll();
  }

  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles('admin', 'advogado')
  @Post()
  async create(@Body() data: any) {
    return this.tasksService.create(data);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findById(@Param('id') id: number) {
    return this.tasksService.findById(Number(id));
  }
}
