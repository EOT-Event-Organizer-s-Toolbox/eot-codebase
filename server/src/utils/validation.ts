import type { Request } from 'express';
import { AnyZodObject, ZodError, z } from 'zod';
import { BadRequestError } from './errors';

/**
 * Applies validation to the request and returns a type safe version of the request.
 * Throws an BadRequestError if request validation was unsuccessful
 * @param schema any ZodObject schema
 * @param req the express request
 * @returns
 */
export async function validationParser<T extends AnyZodObject>(
  schema: T,
  req: Request,
): Promise<z.infer<T>> {
  try {
    return await schema.parseAsync(req);
  } catch (err) {
    if (err instanceof ZodError) {
      throw new BadRequestError('', err.issues);
    }
    throw new BadRequestError(String(err));
  }
}
