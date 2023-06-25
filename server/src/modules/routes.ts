import { Response, Router } from 'express';
import communityEventRouter from './community-event/router';

const router = Router();

router.get('/api', (_, res: Response) => {
  res.json({
    message: 'Hello, World!',
  });
});

router.use('/api/community-events', communityEventRouter);

export default router;