import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDTO } from 'src/domain/users/dto/user.dto';
import type { Response } from 'express';

@Controller('user')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('list')
  getUser(): Promise<UserDTO[]> {
    return this.userService.findAllUsers();
  }

  @Post('create')
  async createUser(@Res() resp: Response, @Body() user: UserDTO) {
    const respUser = await this.userService.creteUser(user);
    return resp.status(201).end(respUser);
  }

  @Put()
  async updateUser(@Res() resp: Response, @Body() user: UserDTO) {
    const respUser = await this.userService.updateUser(user);
    return resp.status(200).end(respUser);
  }

  @Delete('remove/:email')
  async deleteUser(@Res() resp: Response, @Param('email') email: string) {
    const respUser = await this.userService.deleteUser(email);
    return resp.status(200).end(respUser);
  }
}
