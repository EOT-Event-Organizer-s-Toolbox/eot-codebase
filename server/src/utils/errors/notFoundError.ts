import { ApplicationError } from './appError';

export class NotFoundError extends ApplicationError {
  constructor(message?: string) {
    super(message || 'NOT FOUND', 404);
  }
}
