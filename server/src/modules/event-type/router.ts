import { Router } from 'express';
import eventTypeController from './controller';

/**
 * Router for the Event Types module
 */

const eventTypeRouter = Router();

eventTypeRouter.post('/', eventTypeController.create);
eventTypeRouter.get('/', eventTypeController.getAll);
eventTypeRouter.put('/:id', eventTypeController.update);
eventTypeRouter.delete('/:id', eventTypeController.delete);
eventTypeRouter.get('/:id', eventTypeController.findById);

export default eventTypeRouter;
