import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { AppointmentsModule } from './modules';

@Module({
  imports: [AppointmentsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
