import { Request, Response, NextFunction } from 'express';
import communityEventService from './service';
import communityEventSerializer from './serializer';

export default {
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
};
