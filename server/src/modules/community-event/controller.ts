import { Request, Response, NextFunction } from 'express';
import communityEventSerializer from './serializer';
import communityEventService from './service';
import { validationParser } from '../../utils/validation';
import {
  createCommunityEventReq,
  deleteCommunityEventReq,
  updateCommunityEventReq,
} from './validations';
import { isAuthenticated } from '../../utils/auth';

/**
 * Community Event Controller
 */
const communityEventController = {
  create: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await isAuthenticated(req.session);
      const { body } = await validationParser(createCommunityEventReq, req);
      const communityEvent = await communityEventService.create(body, user.id);
      res.json({
        data: communityEventSerializer.default(communityEvent),
      });
    } catch (e) {
      next(e);
    }
  },
  update: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = await isAuthenticated(req.session);
      // validate request
      const { body, params } = await validationParser(
        updateCommunityEventReq,
        req,
      );

      // call service
      const result = await communityEventService.updateById(
        params.id,
        body,
        id,
      );

      // serialize response
      res.json({ data: communityEventSerializer.default(result) });
    } catch (e) {
      next(e);
    }
  },
  findById: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id: userId } = await isAuthenticated(req.session);
      const { id } = req.params;
      const result = await communityEventService.findById(id, userId);
      res.json({ data: communityEventSerializer.default(result) });
    } catch (e) {
      next(e);
    }
  },
  getAll: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = await isAuthenticated(req.session);
      const result = await communityEventService.findAll(id);
      res.json({
        data: result.map((event) => communityEventSerializer.default(event)),
      });
    } catch (e) {
      next(e);
    }
  },
  delete: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id: userId } = await isAuthenticated(req.session);
      // validate request
      const {
        params: { id },
      } = await validationParser(deleteCommunityEventReq, req);

      const result = await communityEventService.deleteById(id, userId);

      res.json({ data: communityEventSerializer.delete(result) });
    } catch (e) {
      next(e);
    }
  },
};

export default communityEventController;
