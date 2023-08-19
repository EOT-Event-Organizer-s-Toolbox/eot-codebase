import { Response, Router } from 'express';
import communityEventRouter from './community-event/router';
import eventTypeRouter from './event-type/router';

const router = Router();

router.get('/api', (_, res: Response) => {
  res.json({
    message: 'Hello, World!',
  });
});

router.use('/api/community-events', communityEventRouter);
router.use('/api/event-types', eventTypeRouter)

export default router;
