import { User } from '../entity/user.entity';

describe('domain > entity > user', () => {
  describe('create', () => {
    it('should be create a user with email and password', () => {
      const mockEmail = 'jhon@gmail.com';
      const mockPassword = '12345678';

      const mockUser = User.create({
        email: mockEmail,
        password: mockPassword,
      });

      expect(mockUser).toBeInstanceOf(User);
    });
  });
});
