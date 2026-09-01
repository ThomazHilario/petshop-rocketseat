import { Injectable } from "@nestjs/common";

import type { PrismaService } from "../prisma";

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.user.findMany({
      take: 10,
      orderBy: {
        createdAt: "desc",
      },
    });
  }
}
