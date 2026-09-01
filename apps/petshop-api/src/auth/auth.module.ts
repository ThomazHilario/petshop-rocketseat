import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";

import { UsersService } from "../users";

@Module({
  imports: [],
  controllers: [
    AuthController,
  ],
  providers: [UsersService],
})
export class AuthModule {}
