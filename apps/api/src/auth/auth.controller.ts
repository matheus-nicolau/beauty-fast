import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SigInDTO } from './dto/sigin.dto';
import type { Response } from 'express';
import { RefreshTokenDTO } from './dto/refresh-toke.dto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  async login(@Res() resp: Response, @Body() sigIn: SigInDTO) {
    const respSigin = await this.authService.sigin(sigIn);
    return resp.status(HttpStatus.OK).json(respSigin);
  }

  @Post('refresh')
  async refreshTokens(
    @Res() resp: Response,
    @Body() refreshToken: RefreshTokenDTO,
  ) {
    const respToken = await this.authService.analizeToken(refreshToken);
    return resp.status(HttpStatus.OK).json(respToken);
  }
}
