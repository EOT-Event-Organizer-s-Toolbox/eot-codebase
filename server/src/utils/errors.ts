/**
 * Main application error
 */
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

/**
 * Bad Request Error: to communicate the the user's request
 * was invalid
 */
export class BadRequestError extends ApplicationError {
  issues: unknown[];
  constructor(message?: string, issues?: unknown[]) {
    super(message || 'VALIDATION ERROR', 400);
    if (issues) {
      this.issues = issues;
    }
  }
}

/**
 * Conflict Error: for unfufilled errors due to conflict with the current state
 * of the target resource
 */
export class ConflictError extends ApplicationError {
  constructor(message?: string) {
    super(message || 'CONFLICT ERROR', 409);
  }
}

/**
 * Internal Server Error: A problem was encountered that could not be handled
 */
export class InternalServerError extends ApplicationError {
  constructor(message?: string) {
    super(message || 'INTERNAL SERVER ERROR', 500);
  }
}

/**
 * Not Found Error: could not find resource the user request was looking for
 */
export class NotFoundError extends ApplicationError {
  constructor(message?: string) {
    super(message || 'NOT FOUND', 404);
  }
}

/**
 * Unauthorized Error: request requires user authentication
 */
export class UnauthorizedError extends ApplicationError {
  constructor(message?: string) {
    super(message || 'UNAUTHORIZED', 401);
  }
}
