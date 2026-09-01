import { Injectable } from "@nestjs/common";

import type { PrismaService } from "../prisma";

import type { CreateUserDTO } from "./dtos";

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(data: CreateUserDTO) {
    return await this.prisma.user.create({
      data
    });
  }
}
