import { User } from 'src/domain/entity/user.entity';
import { Validator } from 'src/domain/validator';
import { UserValidator } from 'src/validators/user.zod.validator';

export class UserValidatorFactory {
  public static create(): Validator<User> {
    return UserValidator.create();
  }
}
