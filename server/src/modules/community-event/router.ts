import { Router } from 'express';
import controller from './controller';

const router = Router();

router.route('/').post(controller.create);

export default router;
