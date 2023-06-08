import { Provider } from '@nestjs/common';
import { Event } from '../entities/event.model';
import { UpdateEventParams } from './eventRepository';

/** Event Service Provider for module */
export const EventServiceProvider = (
  impl: new (...args: any[]) => EventService,
): Provider => ({
  provide: EventService,
  useClass: impl as any,
});

/** Event Service Symbol for Injections */
export const EventService = Symbol('EventService');

/** Event Service interface */
export interface EventService {
  /** Updates an event by taking an object with an event id and any other field that should be updated for that event */
  updateEvent(params: UpdateEventCommand): UpdateEventResult;
}

export type UpdateEventCommand = UpdateEventParams;
export type UpdateEventResult = Event;
