import { Router } from 'express';
import controller from './controller';

const router = Router();

router.post('/', controller.create);

export default router;
