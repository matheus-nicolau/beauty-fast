import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDTO } from 'src/dto/user.dto';

@Controller('user')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('list')
  getUser(): Promise<UserDTO[]> {
    return this.userService.findAllUsers();
  }

  @Post('create')
  async createUser(@Body() user: UserDTO) {
    const userCreated = await this.userService.creteUser(user);
    return userCreated;
  }
}
