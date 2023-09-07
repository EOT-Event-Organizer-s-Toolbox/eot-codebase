import * as dotenv from 'dotenv';
dotenv.config();

export const env = {
  PORT: process.env.PORT,
  SESSION_SECRET: process.env.SESSION_SECRET,
} as const;
