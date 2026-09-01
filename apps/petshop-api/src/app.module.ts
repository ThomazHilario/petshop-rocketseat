import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";

import { PrismaService } from "./prisma";

import { UsersModule } from "./users";

@Module({
  imports: [
    UsersModule
  ],
  controllers: [
    AppController,
  ],
  providers: [],
})
export class AppModule {}
