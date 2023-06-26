import { ApplicationError } from './appError';


/**
 * Internal Server Error: A problem was encountered that could not be handled
 */
export class InternalServerError extends ApplicationError {
  constructor(message?: string) {
    super(message || 'INTERNAL SERVER ERROR', 500);
  }
}
