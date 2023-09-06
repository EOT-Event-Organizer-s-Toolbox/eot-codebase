import { z } from 'zod';

export const loginReqSchema = z.object({
  body: z.object({
    email: z.string(),
    password: z.string(),
  }),
});

export const registerReqSchema = z.object({
  body: z.object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    email: z.string().email(),
    phone: z.string().optional(),
    password: z.string(),
  }),
});
