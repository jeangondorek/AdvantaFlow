import { Module } from '@nestjs/common';
import { TribunalService } from './tribunal.service';
import { TribunalController } from './tribunal.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  providers: [TribunalService, PrismaService],
  controllers: [TribunalController],
  exports: [TribunalService],
})
export class TribunalModule {}
