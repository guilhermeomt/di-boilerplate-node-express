export class ApplicationError extends Error {
  status: string;
  statusCode: number;

  constructor(message = 'Internal Server Error', statusCode = 500) {
    super(message);
    this.status = 'error';
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
}
