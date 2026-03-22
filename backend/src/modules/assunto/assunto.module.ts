import { Module } from '@nestjs/common';
import { AssuntoService } from './assunto.service';
import { AssuntoController } from './assunto.controller';
import { PrismaService } from '../../prisma/prisma.service'

@Module({
  providers: [AssuntoService, PrismaService],
  controllers: [AssuntoController],
  exports: [AssuntoService],
})
export class AssuntoModule {}
