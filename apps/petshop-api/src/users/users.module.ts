import { Module } from "@nestjs/common";

import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";

import { PrismaService } from "../prisma";

@Module({
  controllers: [
    UsersController
  ],
  providers: [
    PrismaService,
    UsersService
  ],
  exports: [UsersService]
})
export class UsersModule {}