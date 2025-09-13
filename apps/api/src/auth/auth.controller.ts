import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigInDTO } from './dto/sigin.dto';
import type { Response } from 'express';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  async login(@Res() resp: Response, @Body() sigIn: SigInDTO) {
    const respSigin = await this.authService.sigin(sigIn);
    return resp.status(HttpStatus.OK).json(respSigin);
  }
}
