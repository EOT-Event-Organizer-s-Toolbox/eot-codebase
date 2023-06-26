import { Router } from 'express';
import controller from './controller';

const router = Router();

router.get('/events', controller.create);

export default router;
