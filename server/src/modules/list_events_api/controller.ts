import { Request, Response, NextFunction } from 'express';
import eventTypeService from './service';
import eventTypeSerializer from './serializer';

export default {
  create: async (req: Request, res: Response, next: NextFunction) => {
    try {
      // validate the request body later
      const eventType = await eventTypeService.create(req.body);
      res.json({
        data: eventTypeSerializer.default(eventType),
      });
    } catch (e) {
      next(e);
    }
  },
};
