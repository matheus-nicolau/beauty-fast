import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import type { SigninDTO, SignupDTO } from 'src/dto/auth';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async signup(data: SignupDTO) {
    const userAlreadyExists = await this.prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (userAlreadyExists)
      throw new NotFoundException({
        status: HttpStatus.NOT_FOUND,
        error: 'user already exists ',
      });

    const user = await this.prisma.user.create({ data });

    return {
      id: user.id,
      name: user.name,
    };
  }

  async signin(data: SigninDTO) {}
}
