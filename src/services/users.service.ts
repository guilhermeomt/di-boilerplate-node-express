import { ApplicationError } from '../exceptions/application.error';
import { UsersRepository } from '../repositories/users.repository';

export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  public getAllUsers() {
    return this.usersRepository.getAll();
  }

  public getUserById(id: string) {
    const user = this.usersRepository.getById(Number(id));

    if (!user) {
      throw new ApplicationError('User not found', 404);
    }

    return user;
  }

  public getUserByEmail(email: string) {
    const user = this.usersRepository.getByEmail(email);

    if (!user) {
      throw new ApplicationError('User not found', 404);
    }

    return user;
  }
}
