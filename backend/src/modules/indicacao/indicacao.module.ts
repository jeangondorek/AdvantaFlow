import { Module } from '@nestjs/common';
import { IndicacaoService } from './indicacao.service';
import { IndicacaoController } from './indicacao.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  providers: [IndicacaoService, PrismaService],
  controllers: [IndicacaoController],
  exports: [IndicacaoService],
})
export class IndicacaoModule {}
