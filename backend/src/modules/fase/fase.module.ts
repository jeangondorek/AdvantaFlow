import { Module } from '@nestjs/common';
import { FaseService } from './fase.service';
import { FaseController } from './fase.controller';
import { PrismaService } from '../../prisma/prisma.service';


@Module({
  providers: [FaseService, PrismaService],
  controllers: [FaseController],
  exports: [FaseService],
})
export class FaseModule {}
