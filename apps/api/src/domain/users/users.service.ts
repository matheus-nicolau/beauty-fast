/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDTO } from 'src/domain/users/dto/user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async findAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async creteUser(user: UserDTO): Promise<string> {
    const userAlreadyExists = await this.userRepository.findOne({
      where: {
        email: user.email,
      },
    });

    if (userAlreadyExists) throw new NotFoundException('Usuário já cadastrado');

    try {
      await this.userRepository.save(user);
    } catch (error) {
      throw new NotFoundException(`Erro ao salvar usuário !`);
    }

    return 'usuário salvo com sucesso';
  }

  async updateUser(user: UserDTO): Promise<string> {
    await this.findUserByEmail(user.email);
    const updateUser = {
      name: user?.name,
      password: user?.password,
    };

    await this.userRepository
      .createQueryBuilder()
      .update(User)
      .set({ ...updateUser })
      .where('email = :email', { email: user.email })
      .execute();

    return 'Usuário atualizado';
  }

  async deleteUser(email: string): Promise<string> {
    await this.findUserByEmail(email);

    await this.userRepository
      .createQueryBuilder()
      .delete()
      .from(User)
      .where('email = :email', { email: email })
      .execute();

    return 'Usuário deletado !';
  }

  private async findUserByEmail(email: string): Promise<User> {
    const userExists = await this.userRepository.findOne({
      where: {
        email: email,
      },
    });
    if (userExists === null)
      throw new NotFoundException('Usuário não encontrado !');

    return userExists;
  }
}
