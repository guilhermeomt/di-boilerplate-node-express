import { readFileSync } from 'fs';
import { resolve } from 'path';
import { injectable } from 'inversify';
import { User } from '../models/user.model';
import { CRUD } from './interfaces/crud.interface';

const data = readFileSync(
  resolve(__dirname, '..', 'data', 'users.json'),
  'utf-8',
);

const users: User[] = JSON.parse(data);

@injectable()
export class UsersRepository implements CRUD<User> {
  public async getAll() {
    return users;
  }

  public async getById(id: number) {
    return users.find((user) => user.id === id);
  }

  public async getByEmail(email: string) {
    return users.find((user) => user.email === email);
  }
}
