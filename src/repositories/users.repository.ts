import { User } from '@server/models/user.model';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const data = readFileSync(
  resolve(__dirname, '..', 'data', 'users.json'),
  'utf-8',
);

const users: User[] = JSON.parse(data);

export class UsersRepository {
  public getAll() {
    return users;
  }

  public getById(id: number) {
    return users.find((user) => user.id === id);
  }

  public getByEmail(email: string) {
    return users.find((user) => user.email === email);
  }
}
