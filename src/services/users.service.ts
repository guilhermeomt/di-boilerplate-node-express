import TYPES from '../types';
import { injectable, inject } from 'inversify';
import { ApplicationError } from '../exceptions/application.error';
import { UsersRepository } from '../repositories/users.repository';
import { IUsersService } from './interfaces/users.service.interface';

@injectable()
export class UsersService implements IUsersService {
  constructor(
    @inject(TYPES.UsersRepository) private usersRepository: UsersRepository,
  ) {}

  public async getAllUsers() {
    return this.usersRepository.getAll();
  }

  public async getUserById(id: string) {
    const user = this.usersRepository.getById(Number(id));

    if (!user) {
      throw new ApplicationError('User not found', 404);
    }

    return user;
  }

  public async getUserByEmail(email: string) {
    const user = await this.usersRepository.getByEmail(email);

    if (!user) {
      throw new ApplicationError('User not found', 404);
    }

    return user;
  }
}
