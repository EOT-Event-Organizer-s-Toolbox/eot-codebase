import { Request, Response, NextFunction } from 'express';
import communityEventSerializer from './serializer';
import communityEventService from './service';
import { validationParser } from '../../utils/validation';
import {
  createCommunityEventReq,
  updateCommunityEventReq,
} from './validations';

/**
 * Community Event Controller
 */
const communityEventController = {
  create: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { body } = await validationParser(createCommunityEventReq, req);
      const communityEvent = await communityEventService.create(body);
      res.json({
        data: communityEventSerializer.default(communityEvent),
      });
    } catch (e) {
      next(e);
    }
  },
  update: async (req: Request, res: Response, next: NextFunction) => {
    try {
      // validate request
      const {
        body: { id, ...update },
      } = await validationParser(updateCommunityEventReq, req);

      // call service
      const response = await communityEventService.updateById(id, update);

      // serialize response
      res.json({ data: communityEventSerializer.default(response) });
    } catch (err) {
      next(err);
    }
  },
};

export default communityEventController;
