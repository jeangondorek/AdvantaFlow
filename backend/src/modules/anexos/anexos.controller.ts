import { Controller, Post, UseInterceptors, UploadedFile, UseGuards } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from '../../middleware/roles.decorator';
import { RoleGuard } from '../../middleware/role.guard';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('anexos')
export class AnexosController {
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Roles('admin', 'advogado')
  @Post('upload')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, unique + extname(file.originalname));
      },
    }),
  }))
  uploadFile(@UploadedFile() file: any) {
    return { filename: file.filename, path: file.path };
  }
}
