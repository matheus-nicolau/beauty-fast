import { Injectable } from '@nestjs/common';
import { SigInDTO } from './dto/sigin.dto';

@Injectable()
export class AuthService {
  async sigin(sigIn: SigInDTO) {}
}
