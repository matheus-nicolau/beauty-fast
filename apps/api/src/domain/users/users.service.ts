import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDTO } from 'src/dto/user.dto';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async findAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async creteUser(user: UserDTO) {
    let createdUser = user;

    try {
      createdUser = await this.userRepository.save(user);
    } catch (error) {
      throw new NotFoundException('Erro ao salvar usuário !');
    }

    return createdUser;
  }
}
