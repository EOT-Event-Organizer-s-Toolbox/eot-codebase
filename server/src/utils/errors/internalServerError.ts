import { ApplicationError } from './appError';

export class InternalServerError extends ApplicationError {
  constructor(message?: string) {
    super(message || 'INTERNAL SERVER ERROR', 500);
  }
}
