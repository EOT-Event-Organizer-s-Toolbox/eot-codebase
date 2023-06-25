import { Request, Response, NextFunction } from 'express';
import { ApplicationError } from '../utils/errors';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.error(err);
  if (err instanceof ApplicationError) {
    res.status(err.status).send({
      message: err.message,
      status: err.status,
    });
  } else {
    res.status(500).send({
      message: 'INTERNAL SERVER ERROR',
      status: 500,
    });
  }
};
