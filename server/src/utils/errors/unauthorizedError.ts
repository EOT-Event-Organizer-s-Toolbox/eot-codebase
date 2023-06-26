import { ApplicationError } from './appError';


/**
 * Unauthorized Error: request requires user authentication
 */
export class UnauthorizedError extends ApplicationError {
  constructor(message?: string) {
    super(message || 'UNAUTHORIZED', 401);
  }
}
