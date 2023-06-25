export class ApplicationError extends Error {
  status: number;
  message: string;
  name: string;
  constructor(message: string, status: number) {
    super();

    Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name;

    this.message = message || 'Something went wrong. Please try again.';

    this.status = status || 500;
  }
}
