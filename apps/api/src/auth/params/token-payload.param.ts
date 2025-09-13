import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { REQUEST_PAYLOAD } from '../consts/payload.const';

export const TokenPayloaParam = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const context = ctx.switchToHttp();
    const request: Request = context.getRequest();
    return request[REQUEST_PAYLOAD];
  },
);
