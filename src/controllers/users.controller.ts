import TYPES from '../types';
import { inject } from 'inversify';
import {
  httpGet,
  BaseHttpController,
  interfaces,
  controller,
} from 'inversify-express-utils';
import { UsersService } from '../services/users.service';
import { ApplicationError } from '../exceptions/application.error';

@controller('/users')
export class UsersController
  extends BaseHttpController
  implements interfaces.Controller
{
  constructor(@inject(TYPES.UsersService) private usersService: UsersService) {
    super();
  }

  @httpGet('/')
  public async index(): Promise<interfaces.IHttpActionResult> {
    try {
      const users = await this.usersService.getAllUsers();
      return this.ok(users);
    } catch (err: ApplicationError | any) {
      return this.json({ message: err.message }, err.statusCode);
    }
  }
}
