import { Body, Controller, HttpException, HttpStatus, Post } from "@nestjs/common";

import { UsersService } from "./users.service";
import type { CreateUserDTO } from "./dtos/create.user.schema";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createUser(@Body() data: CreateUserDTO) {
    try {
      return this.usersService.createUser(data);
    } catch(error) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'Error creating user'
      }, HttpStatus.FORBIDDEN), {
        cause: error
      };
    }
  }
}
