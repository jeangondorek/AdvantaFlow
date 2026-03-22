import { Module } from '@nestjs/common';
import { ComarcaService } from './comarca.service';
import { ComarcaController } from './comarca.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  providers: [ComarcaService, PrismaService],
  controllers: [ComarcaController],
  exports: [ComarcaService],
})
export class ComarcaModule {}
