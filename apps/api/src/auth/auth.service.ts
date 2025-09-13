import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { SigInDTO } from './dto/sigin.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/domain/users/entities/user.entity';
import { HashingService } from './hashing/hashing.service';
import jwtConfig from './config/jwt.config';
import type { ConfigType } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { RefreshTokenDTO } from './dto/refresh-toke.dto';
import { TokenPayloadDto } from './dto/token-payload.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @Inject(jwtConfig.KEY)
    private readonly jwtConfiguration: ConfigType<typeof jwtConfig>,
    private readonly hashingService: HashingService,
    private readonly jwtService: JwtService,
  ) {}

  async sigin(sigIn: SigInDTO) {
    const user = await this.userRepository.findOneBy({ email: sigIn.email });
    if (!user) throw new UnauthorizedException('Email ou senha incorretos !');

    const comparedPassword = await this.hashingService.compare(
      sigIn.password,
      user.password,
    );
    if (!comparedPassword)
      throw new UnauthorizedException('Email ou senha incorretos !');

    return await this.generateTokens(user);
  }

  async analizeToken(token: RefreshTokenDTO) {
    const resp: TokenPayloadDto = await this.jwtService.verifyAsync(
      token.refreshToken,
      this.jwtConfiguration,
    );

    const user = await this.userRepository.findOneBy({ id: resp.sub });
    if (!user) throw new UnauthorizedException('Usuário deve fazer login !');

    return this.generateTokens(user);
  }

  private async generateTokens(user: User) {
    const accessToken = await this.signJwtAsync<Partial<User>>(
      user.id,
      this.jwtConfiguration.ttl,
      { email: user.email },
    );

    const refreshToken = await this.signJwtAsync(
      user.id,
      this.jwtConfiguration.jwtRefreshTtl,
    );

    return { accessToken: accessToken, refreshToken: refreshToken };
  }

  private async signJwtAsync<T>(sub: string, expiresIn: number, payload?: T) {
    return await this.jwtService.signAsync(
      {
        sub,
        ...payload,
      },
      {
        audience: this.jwtConfiguration.audience,
        issuer: this.jwtConfiguration.issuer,
        secret: this.jwtConfiguration.secret,
        expiresIn,
      },
    );
  }
}
