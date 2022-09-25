import TYPES from '../types';
import { injectable, inject } from 'inversify';
import { ApplicationError } from '../exceptions/application.error';
import { UsersService } from './users.service';

@injectable()
export class AuthService {
  constructor(@inject(TYPES.UsersService) private usersService: UsersService) {}

  public async login(email: string, password: string) {
    const user = await this.usersService.getUserByEmail(email);

    if (!user) {
      throw new ApplicationError('User not found', 404);
    }

    if (user.password !== password) {
      throw new ApplicationError('Invalid password', 401);
    }

    return user;
  }
}
