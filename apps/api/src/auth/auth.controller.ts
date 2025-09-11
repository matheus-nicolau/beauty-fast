import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigInDTO } from './dto/sigin.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post()
  async login(@Body() sigIn: SigInDTO) {
    const respSigin = await this.authService.sigin(sigIn);
  }
}
