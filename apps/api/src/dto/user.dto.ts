import { IsEmail, IsString } from 'class-validator';

export class UserDTO {
  id?: string;

  @IsString()
  name: string;

  @IsString()
  password: string;

  @IsEmail()
  email: string;
}
