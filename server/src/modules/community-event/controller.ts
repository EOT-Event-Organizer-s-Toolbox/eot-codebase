import { Request, Response, NextFunction } from 'express';
import communityEventService from './services';

const communityEventController = {
  updateCommunityEvent: async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { id, ...update } = req.body;
      const response = await communityEventService.updateEventById(id, update);
      res.json(response);
    } catch (err) {
      next(err);
    }
  },
};

export default communityEventController;
