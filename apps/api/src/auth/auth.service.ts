import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { SigInDTO } from './dto/sigin.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/domain/users/entities/user.entity';
import { HashingService } from './hashing/hashing.service';
import jwtConfig from './config/jwt.config';
import type { ConfigType } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

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

  async sigin(sigIn: SigInDTO): Promise<string> {
    const user = await this.userRepository.findOneBy({ email: sigIn.email });
    if (!user) throw new UnauthorizedException('Email ou senha incorretos !');

    const comparedPassword = await this.hashingService.compare(
      sigIn.password,
      user.password,
    );
    if (!comparedPassword)
      throw new UnauthorizedException('Email ou senha incorretos !');

    const accessToken = await this.jwtService.signAsync(
      {
        sub: user.id,
        email: user.email,
      },
      {
        audience: this.jwtConfiguration.audience,
        issuer: this.jwtConfiguration.issuer,
        secret: this.jwtConfiguration.secret,
        expiresIn: this.jwtConfiguration.ttl,
      },
    );

    return accessToken;
  }
}
