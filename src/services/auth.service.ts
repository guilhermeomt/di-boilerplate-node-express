import { ApplicationError } from '../exceptions/application.error';
import { UsersService } from './users.service';

export class AuthService {
  constructor(private usersService: UsersService) {}

  public login(email: string, password: string) {
    const user = this.usersService.getUserByEmail(email);

    if (!user) {
      throw new ApplicationError('User not found', 404);
    }

    if (user.password !== password) {
      throw new ApplicationError('Invalid password', 401);
    }

    return user;
  }
}
