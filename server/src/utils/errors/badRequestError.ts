import { ApplicationError } from './appError';

/**
 * Bad Request Error: to communicate the the user's request
 * was invalid
 */
export class BadRequestError extends ApplicationError {
  issues: any[];
  constructor(message?: string, issues?: any[]) {
    super(message || 'VALIDATION ERROR', 400);
    if (issues) {
      this.issues = issues;
    }
  }
}
