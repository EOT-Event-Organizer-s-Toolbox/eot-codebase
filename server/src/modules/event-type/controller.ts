import { Request, Response, NextFunction } from 'express';
import eventTypeSerializer from './serializer';
import eventTypeService from './service';
import { validationParser } from '../../utils/validation';
import {
  createEventTypeReq,
  deleteEventTypeReq,
  updateEventTypeReq,
} from './validations';

import { NewEventType } from './types';
import { isAuthenticated } from 'src/utils/auth';

/**
 * Event Type Controller
 */

const eventTypeController = {
  create: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await isAuthenticated(req.session);
      const { body } = await validationParser(createEventTypeReq, req);
      const eventType = await eventTypeService.create(body as NewEventType);
      res.json({
        data: eventTypeSerializer.default(eventType),
      });
    } catch (e) {
      next(e);
    }
  },
  update: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await isAuthenticated(req.session);
      // validate request
      const {
        body: { id, ...update },
      } = await validationParser(updateEventTypeReq, req);

      // call service
      const result = await eventTypeService.updateById(id, update);

      // serialize response
      res.json({ data: eventTypeSerializer.default(result) });
    } catch (e) {
      next(e);
    }
  },
  findById: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await isAuthenticated(req.session);
      const { id } = req.params;
      const result = await eventTypeService.findById(id);
      res.json({ data: eventTypeSerializer.default(result) });
    } catch (e) {
      next(e);
    }
  },
  getAll: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await isAuthenticated(req.session);
      const result = await eventTypeService.findAll();
      res.json({
        data: result.map((event) => eventTypeSerializer.default(event)),
      });
    } catch (e) {
      next(e);
    }
  },
  delete: async (req: Request, res: Response, next: NextFunction) => {
    try {
      await isAuthenticated(req.session);
      // validate request
      const {
        params: { id },
      } = await validationParser(deleteEventTypeReq, req);

      const result = await eventTypeService.deleteById(id);

      res.json({ data: eventTypeSerializer.delete(result) });
    } catch (e) {
      next(e);
    }
  },
};

export default eventTypeController;
