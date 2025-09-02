import { DomainException } from './domain.exception';

export class ValidatorException extends DomainException {
  public constructor(
    internalMessage: string,
    externalMessage?: string,
    context?: string,
  ) {
    super(internalMessage, externalMessage, context);
    this.name = ValidatorException.name;
  }
}
