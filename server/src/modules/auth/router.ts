import { Router } from 'express';
import authController from './controller';

const authRouter = Router();

authRouter.get('/user', authController.getCurrentUser);
authRouter.post('/login', authController.login);
authRouter.post('/register', authController.register);
authRouter.get('/logout', authController.logout);

export default authRouter;
