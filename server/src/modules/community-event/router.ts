import { Router } from 'express';
import communityEventController from './controller';

const communityEventRouter = Router();

communityEventRouter.post('/', communityEventController.create);

communityEventRouter.put('/', communityEventController.updateCommunityEvent);

export default communityEventRouter;
