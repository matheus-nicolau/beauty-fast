import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SigInDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
