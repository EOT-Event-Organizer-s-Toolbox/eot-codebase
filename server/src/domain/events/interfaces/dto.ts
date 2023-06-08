import { Event } from '../entities/event.model';
import { UpdateEventCommand } from './eventService';

export type UpdateEventRes = Event;
export type UpdateEventReq = UpdateEventCommand;
