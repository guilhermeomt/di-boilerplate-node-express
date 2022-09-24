import express, { Application, Request, Response } from 'express';
require('dotenv').config();

const app: Application = express();

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello World');
});

export default app;
