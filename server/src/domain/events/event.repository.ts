import { Injectable } from '@nestjs/common';
import { Event } from './entities/event.model';
import {
  EventRepository,
  UpdateEventParams,
} from './interfaces/eventRepository';

@Injectable()
export class EventRepositoryImpl implements EventRepository {
  updateEvent(params: UpdateEventParams): Event {
    console.log(params);
    throw new Error('Method not implemented.');
  }
}
