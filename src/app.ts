import 'reflect-metadata';
import TYPES from './types';
import { Container } from 'inversify';
import { InversifyExpressServer } from 'inversify-express-utils';
import express from 'express';
import { UsersRepository } from './repositories/users.repository';
import { UsersService } from './services/users.service';
import { AuthService } from './services/auth.service';
require('dotenv').config();

import './controllers/users.controller.ts';
import './controllers/auth.controller.ts';

let container = new Container();

export class AppBootstrap {
  public server: InversifyExpressServer;
  public readonly port: number = Number(process.env.PORT) || 3001;

  constructor() {
    this.configureContainer();
    this.server = new InversifyExpressServer(container);
    this.server.setConfig(async (app) => {
      await this.setupMiddlewares(app);
    });
  }

  private async setupMiddlewares(app: express.Application) {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
  }

  private async configureContainer() {
    container.bind<UsersRepository>(TYPES.UsersRepository).to(UsersRepository);
    container.bind<UsersService>(TYPES.UsersService).to(UsersService);
    container.bind<AuthService>(TYPES.AuthService).to(AuthService);
  }
}
