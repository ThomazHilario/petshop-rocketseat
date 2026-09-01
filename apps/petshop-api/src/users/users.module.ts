import { Module } from "@nestjs/common";

import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";

import { PrismaService } from "../prisma";

@Module({
  imports: [],
  controllers: [
    UsersController
  ],
  providers: [
    PrismaService,
    UsersService
  ],
})
export class UsersModule {}