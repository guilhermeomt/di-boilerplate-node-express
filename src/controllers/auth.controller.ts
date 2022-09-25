import { AuthService } from '../services/auth.service';
import { Router, Request, Response } from 'express';
import { ApplicationError } from '../exceptions/application.error';

export class AuthController {
  private path = '/auth';
  public router: Router = Router();

  constructor(private authService: AuthService) {
    this.initializeRoutes();
  }

  private login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const user = await this.authService.login(email, password);
      res.status(200).send(user);
    } catch (err: ApplicationError | any) {
      res.status(err.statusCode || 500).send({ message: err.message });
    }
  };

  public initializeRoutes() {
    this.router.get(`${this.path}/login`, this.login);
    return this.router;
  }
}
