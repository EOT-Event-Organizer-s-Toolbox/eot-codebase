import { PrismaClient } from '@prisma/client';

/**
 * Main prisma client that should be used throughout the application
 */
export const prisma = new PrismaClient();
