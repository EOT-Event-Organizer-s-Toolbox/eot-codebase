import { NextFunction, Request, Response } from 'express';
import { validationParser } from '../../utils/validation';
import { loginReqSchema, registerReqSchema } from './validations';
import authService from './service';

const authController = {
  login: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { body } = await validationParser(loginReqSchema, req);

      const user = await authService.login(body.email, body.password);

      req.session.regenerate(function (err) {
        if (err) next(err);

        req.session.user = user;

        req.session.save(function (err) {
          if (err) return next(err);
          console.log(req.session);
          return res.status(200).json({ message: 'Login Successful' });
        });
      });
    } catch (e) {
      next(e);
    }
  },

  register: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { body } = await validationParser(registerReqSchema, req);
      await authService.register(
        body.email,
        body.password,
        body.firstName,
        body.lastName,
        body.phone,
      );
      return res.status(201).json({ message: 'User registration successful' });
    } catch (e) {
      next(e);
    }
  },

  logout: async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.session)
    try {
      req.session.save((err) => {
        if (err) return next(err);

        req.session.regenerate((err) => {
          if (err) return next(err);

          return res.json({ message: 'User was successfully logged out' });
        });
      });
    } catch (e) {
      next(e);
    }
  },
};

export default authController
