import { ApplicationError } from '@server/exceptions/application.error';
import { Router, Request, Response } from 'express';
import { UsersService } from '../services/users.service';

export class UsersController {
  private path = '/users';
  public router: Router = Router();

  constructor(private usersService: UsersService) {
    this.initializeRoutes();
  }

  private getAllUsers = async (_req: Request, res: Response) => {
    try {
      const users = await this.usersService.getAllUsers();
      res.status(200).send(users);
    } catch (err: ApplicationError | any) {
      res.status(err.statusCode || 500).send({ message: err.message });
    }
  };

  private getUserById = async (req: Request, res: Response) => {
    try {
      const user = await this.usersService.getUserById(req.params.id);
      res.status(200).send(user);
    } catch (err: ApplicationError | any) {
      console.log(err);
      res.status(err.statusCode || 500).send({ message: err.message });
    }
  };

  public initializeRoutes() {
    this.router.get(this.path, this.getAllUsers);
    this.router.get(`${this.path}/:id`, this.getUserById);
    return this.router;
  }
}
