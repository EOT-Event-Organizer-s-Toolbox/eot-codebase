import { Router } from 'express';
import communityEventController from './controller';

/**
 * Router for the Community Event module
 */
const communityEventRouter = Router();

communityEventRouter.post('/', communityEventController.create);
communityEventRouter.put('/', communityEventController.update);
communityEventRouter.get('/', communityEventController.getAll)
communityEventRouter.delete('/:id', communityEventController.delete)
communityEventRouter.get('/:id', communityEventController.findById);


export default communityEventRouter;
