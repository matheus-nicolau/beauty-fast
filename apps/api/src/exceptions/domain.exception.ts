import { Exception } from './exception';

export class DomainException extends Exception {
  public constructor(
    internalMessage: string,
    externalMessage?: string,
    context?: string,
  ) {
    super(internalMessage, externalMessage, context);
    this.name = DomainException.name;
  }
}
