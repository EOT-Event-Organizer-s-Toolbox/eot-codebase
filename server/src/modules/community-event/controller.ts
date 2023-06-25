import { Request, Response, NextFunction } from 'express';
import communityEventSerializer from './serializer';
import communityEventService from './service';

const communityEventController = {
  create: async (req: Request, res: Response, next: NextFunction) => {
    try {
      // validate the request body later
      const communityEvent = await communityEventService.create(req.body);
      res.json({
        data: communityEventSerializer.default(communityEvent),
      });
    } catch (e) {
      next(e);
    }
  },
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
