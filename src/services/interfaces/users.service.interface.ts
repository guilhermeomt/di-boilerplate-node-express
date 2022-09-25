import { User } from '../../models/user.model';

export interface IUsersService {
  getAllUsers(): Promise<User[]>;
  getUserById(id: string): Promise<User>;
  getUserByEmail(email: string): Promise<User>;
}
