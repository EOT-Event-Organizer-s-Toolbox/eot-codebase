import { Request, Response, NextFunction } from 'express';
import { ApplicationError } from '../utils/errors';
import { BadRequestError } from '../utils/errors';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.error(err);
  const response: { message: string; status: number; issues?: unknown[] } = {
    message: 'INTERNAL SERVER ERROR',
    status: 500,
  };

  if (err instanceof ApplicationError) {
    response.message = err.message;
    response.status = err.status;
    if (err instanceof BadRequestError) {
      response.issues = err.issues;
    }
  }
  res.status(response.status).send(response);
};
