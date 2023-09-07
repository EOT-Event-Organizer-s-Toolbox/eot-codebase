import { Response, Router } from 'express';
import communityEventRouter from './community-event/router';
import eventTypeRouter from './event-type/router';
import authRouter from './auth/router';

const router = Router();

router.get('/api', (_, res: Response) => {
  res.json({
    message: 'Hello, World!',
  });
});

router.use('/api/community-events', communityEventRouter);
router.use('/api/event-types', eventTypeRouter)
router.use('/api/auth', authRouter)

export default router;
