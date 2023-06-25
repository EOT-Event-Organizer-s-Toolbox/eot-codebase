import { ApplicationError } from './appError';

export class UnauthorizedError extends ApplicationError {
  constructor(message?: string) {
    super(message || 'UNAUTHORIZED', 401);
  }
}
