import { ApplicationError } from './appError';

/**
 * Conflict Error: for unfufilled errors due to conflict with the current state
 * of the target resource
 */
export class ConflictError extends ApplicationError {
  constructor(message?: string) {
    super(message || 'CONFLICT ERROR', 409);
  }
}
