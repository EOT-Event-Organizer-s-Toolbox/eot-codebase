import { Request, Response, NextFunction } from 'express';
import communityEventSerializer from './serializer';
import communityEventService from './service';
import { validationParser } from '../../utils/validation';
import {
  createCommunityEventReq,
  deleteCommunityEventReq,
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
      const result = await communityEventService.updateById(id, update);

      // serialize response
      res.json({ data: communityEventSerializer.default(result) });
    } catch (err) {
      next(err);
    }
  },
  getAll: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await communityEventService.findAll();
      res.json({
        data: result.map((event) => communityEventSerializer.default(event)),
      });
    } catch (err) {
      next(err);
    }
  },
  delete: async(req:Request, res: Response, next: NextFunction) =>{
    try {
      // validate request
      const {params: {id}} = await validationParser(deleteCommunityEventReq, req)

      const result = await communityEventService.deleteById(id)

      res.json({data: communityEventSerializer.delete(result)})

    }catch (err){
      next(err)
    }
  }
};

export default communityEventController;
