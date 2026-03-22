import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { CorsMiddleware } from './middleware/cors.middleware';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { ProfilesModule } from './modules/profiles/profiles.module';
import { ClientsModule } from './modules/clients/clients.module';
import { ProcessesModule } from './modules/processes/processes.module';
import { TasksModule } from './modules/tasks/tasks.module';
import { AnexosModule } from './modules/anexos/anexos.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { PasswordModule } from './modules/auth/password/password.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { ComarcaModule } from './modules/comarca/comarca.module';
import { AssuntoModule } from './modules/assunto/assunto.module';
import { FaseModule } from './modules/fase/fase.module';

import { IndicacaoModule } from './modules/indicacao/indicacao.module';
import { TribunalModule } from './modules/tribunal/tribunal.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    UsersModule,
    ProfilesModule,
    ClientsModule,
    ProcessesModule,
    TasksModule,
    AnexosModule,
    DashboardModule,
    PasswordModule,
    NotificationsModule,
    ComarcaModule,
    AssuntoModule,
    FaseModule,
    IndicacaoModule,
    TribunalModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware, CorsMiddleware)
      .forRoutes('*');
  }
}
