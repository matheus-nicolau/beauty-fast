import { User } from 'src/domain/entity/user.entity';
import { Validator } from 'src/domain/validator';
import { ZodUtils } from 'src/utils/zod-utils';
import { z } from 'zod';

export class UserValidator implements Validator<User> {
  private constructor() {}

  public static create(): UserValidator {
    return new UserValidator();
  }

  validate(entry: User): void {
    try {
      this.getSchema().parse(entry);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const message = ZodUtils.formatZodError(error);
        throw new Error(`UserZodValidator: ${message}`);
      }
    }
  }

  private getSchema() {
    const schema = z.object({
      email: z.email(),
      password: z.string().min(8),
      createdAt: z.date(),
      updatedAt: z.date(),
    });

    return schema;
  }
}
