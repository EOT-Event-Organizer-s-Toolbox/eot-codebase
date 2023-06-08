import { Provider } from '@nestjs/common';
import { Event } from '../entities/event.model';

/** Provider for module */
export const EventRepositoryProvider = (
  impl: new () => EventRepository,
): Provider => ({
  provide: EventRepository,
  useClass: impl as any,
});

/** Event Repository Symbol for Injection */
export const EventRepository = Symbol('EventRepository');

// Event Repository interface
export interface EventRepository {
  /** Updates an event by taking an object with an event id and any other field that should be updated for that event */
  updateEvent(params: UpdateEventParams): Event;
}

export type UpdateEventParams = { id: number } & Partial<Omit<Event, 'id'>>;
