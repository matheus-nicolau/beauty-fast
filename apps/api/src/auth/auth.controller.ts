import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import type { SigninDTO, SignupDTO } from 'src/dto/auth';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() body: SignupDTO) {
    this.authService.signup(body);
  }

  @Post('signin')
  signin(@Body() body: SigninDTO) {
    this.authService.signin(body);
  }
}
