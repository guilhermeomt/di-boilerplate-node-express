import express, { Application } from 'express';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { UsersRepository } from './repositories/users.repository';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
require('dotenv').config();

const app: Application = express();

app.use(express.json());

const usersRepository = new UsersRepository();
const usersService = new UsersService(usersRepository);
const authService = new AuthService(usersService);

app.use('/api', new UsersController(usersService).initializeRoutes());
app.use('/api', new AuthController(authService).initializeRoutes());

export default app;
