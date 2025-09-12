import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigInDTO } from './dto/sigin.dto';
import type { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post()
  async login(@Res() resp: Response, @Body() sigIn: SigInDTO) {
    const respSigin = await this.authService.sigin(sigIn);
    return resp.status(200).end(respSigin);
  }
}
