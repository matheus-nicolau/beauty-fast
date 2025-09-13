import { registerAs } from '@nestjs/config';

export default registerAs('jwt', () => {
  return {
    secret: process.env.JWT_SECRET,
    audience: process.env.JWT_TOKEN_AUDIENCE,
    issuer: process.env.JWT_TOKEN_ISSUE,
    ttl: Number(process.env.JWT_TOKEN_TTL ?? '3600'),
    jwtRefreshTtl: Number(process.env.JWT_REFRESH_TTL ?? '86400'),
  };
});
