import { Module } from '@nestjs/common';
import { ProcessesService } from './processes.service';
import { ProcessesController } from './processes.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  providers: [ProcessesService, PrismaService],
  controllers: [ProcessesController],
  exports: [ProcessesService],
})
export class ProcessesModule {}
