import { Session, SessionData } from 'express-session';
import { UnauthorizedError } from './errors';
import { prisma } from '../modules/prisma';


/**
 * Takes in a request session and returns a user if session is valid/authenticated 
 * else it throws an UnauthorizedError 
 * @param session 
 * @returns 
 */
export async function isAuthenticated(session: Session & Partial<SessionData>) {
  if (!session.user) {
    throw new UnauthorizedError('Unauthorized user access');
  }
  const existingUser = await prisma.user.findUnique({ where: { id: session.user.id } });

  if(!existingUser){
    throw new UnauthorizedError('Unauthorized user access');
  }

  return existingUser;
}
