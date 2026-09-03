import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { AppointmentsModule } from './modules';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [AppointmentsModule, ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' })],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
