import { ApplicationError } from './appError';

export class ConflictError extends ApplicationError {
  constructor(message?: string) {
    super(message || 'CONFLICT ERROR', 409);
  }
}
