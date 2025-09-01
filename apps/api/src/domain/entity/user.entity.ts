import { UserCreateDTO } from 'src/dto/user';
import { Entity } from '../entity';
import { EncryptUtils } from 'src/utils/encrypt-utils';

export class User extends Entity {
  private constructor(
    private email: string,
    private password: string,
    createdAt: Date,
    updatedAt: Date,
  ) {
    super(createdAt, updatedAt);
    this.validate();
  }

  public static create({ email, password }: UserCreateDTO): User {
    const hashedPassword = EncryptUtils.encryptPassword(password);
    const createdAt = new Date();
    const updateAt = new Date();

    return new User(email, hashedPassword, createdAt, updateAt);
  }

  protected validate(): void {
    throw new Error('Method not implemented.');
  }

  public getEmail() {
    return this.email;
  }

  public getPassword() {
    return this.password;
  }

  public comparePassword(comparedPassword: string): boolean {
    return EncryptUtils.comparePassword(comparedPassword, this.password);
  }
}
