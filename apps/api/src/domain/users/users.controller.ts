import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDTO } from 'src/domain/users/dto/user.dto';
import type { Response } from 'express';
import { AuthTokenGuard } from 'src/auth/guard/auth-token.guard';
import { TokenPayloaParam } from 'src/auth/params/token-payload.param';
import { TokenPayloadDto } from 'src/auth/dto/token-payload.dto';

@Controller('user')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('list')
  @UseGuards(AuthTokenGuard)
  getUser(): Promise<UserDTO[]> {
    return this.userService.findAllUsers();
  }

  @Post('create')
  async createUser(@Res() resp: Response, @Body() user: UserDTO) {
    const respUser = await this.userService.creteUser(user);
    return resp.status(201).end(respUser);
  }

  @Put()
  @UseGuards(AuthTokenGuard)
  async updateUser(
    @TokenPayloaParam() token: TokenPayloadDto,
    @Res() resp: Response,
    @Body() user: UserDTO,
  ) {
    const respUser = await this.userService.updateUser(user, token);
    return resp.status(200).end(respUser);
  }

  @Delete('remove/:email')
  @UseGuards(AuthTokenGuard)
  async deleteUser(
    @TokenPayloaParam() token: TokenPayloadDto,
    @Res() resp: Response,
    @Param('email') email: string,
  ) {
    const respUser = await this.userService.deleteUser(email, token);
    return resp.status(200).end(respUser);
  }
}
