import { AuthService } from '../services/auth.service';
import { inject } from 'inversify';
import {
  httpPost,
  BaseHttpController,
  interfaces,
  controller,
} from 'inversify-express-utils';
import { ApplicationError } from '../exceptions/application.error';
import TYPES from '../types';

@controller('/auth')
export class AuthController
  extends BaseHttpController
  implements interfaces.Controller
{
  constructor(@inject(TYPES.AuthService) private authService: AuthService) {
    super();
  }

  @httpPost('/login')
  public async index(): Promise<interfaces.IHttpActionResult> {
    const { email, password } = this.httpContext.request.body;

    if (!email || !password) {
      return this.json({ message: 'Email and password are required' }, 400);
    }

    try {
      const user = await this.authService.login(email, password);
      return this.ok(user);
    } catch (err: ApplicationError | any) {
      return this.json(
        {
          message: err.message,
        },
        err.statusCode,
      );
    }
  }
}
