import { ConflictError, UnauthorizedError } from '../..//utils/errors';
import { prisma } from '../prisma';
import * as bcrypt from 'bcrypt';
import { AuthInfo } from 'express-session';

const authService = {
  /**
   * Takes in an email and password and checks if the credentials match any user
   * in the database. If successful the user auth info is returned else an Unauthorized error
   * is thrown.
   *
   * @param email - user's email
   * @param password - user's password
   * @returns
   */
  login: async (email: string, password: string): Promise<AuthInfo> => {
    const user = await prisma.user.findUnique({ where: { email: email } });

    if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
      throw new UnauthorizedError('Invalid email or password');
    }

    return { id: user.id };
  },

  register: async (
    email: string,
    password: string,
    firstname?: string,
    lastname?: string,
    phone?: string,
  ): Promise<AuthInfo> => {
    const existingUser = await prisma.user.findUnique({
      where: { email: email },
    });

    if (existingUser) {
      throw new ConflictError('User already exists');
    }
    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        email: email,
        firstName: firstname,
        lastName: lastname,
        phone: phone,
        passwordHash: passwordHash,
      },
    });
    return { id: newUser.id };
  },
};

export default authService;
