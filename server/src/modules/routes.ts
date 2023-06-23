import { Response, Router } from 'express';
import communityEventRouter from './community-event/router';

const router = Router();

router.get('/', (_, res: Response) => {
  res.json({
    message: 'Hello, World!',
  });
});

router.use('/community-events', communityEventRouter);

export default router;
