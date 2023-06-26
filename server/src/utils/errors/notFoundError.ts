import { ApplicationError } from './appError';

/**
 * Not Found Error: could not find resource the user request was looking for
 */
export class NotFoundError extends ApplicationError {
  constructor(message?: string) {
    super(message || 'NOT FOUND', 404);
  }
}
