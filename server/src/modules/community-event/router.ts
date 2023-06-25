import { Router } from 'express';
import controller from './controller';
import communityEventController from './controller';

const communityEventRouter = Router();

communityEventRouter.put('/', communityEventController.updateCommunityEvent);

export default communityEventRouter;
