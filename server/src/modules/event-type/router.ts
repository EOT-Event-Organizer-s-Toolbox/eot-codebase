import { Router } from 'express';
import eventTypeController from './controller';

/**
 * Router for the Event Types module
 */

const eventTypeRouter = Router();

eventTypeRouter.post('/', eventTypeController.create);
eventTypeRouter.put('/', eventTypeController.update);
eventTypeRouter.get('/', eventTypeController.getAll)
eventTypeRouter.delete('/:id', eventTypeController.delete)
eventTypeRouter.get('/:id', eventTypeController.findById);

export default eventTypeRouter;