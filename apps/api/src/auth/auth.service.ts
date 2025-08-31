import { Injectable } from '@nestjs/common';
import { SigninDTO, SignupDTO } from 'src/dto/auth';

@Injectable()
export class AuthService {
  async signup(data: SignupDTO) {}

  async signin(data: SigninDTO) {}
}
