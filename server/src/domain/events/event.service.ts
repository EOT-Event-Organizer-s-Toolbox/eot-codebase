import { Inject } from '@nestjs/common';
import { EventRepository } from './interfaces/eventRepository';
import {
  EventService,
  UpdateEventCommand,
  UpdateEventResult,
} from './interfaces/eventService';

export class EventServiceImpl implements EventService {
  static service = EventService;
  constructor(
    @Inject(EventRepository) private readonly eventRepo: EventRepository,
  ) {}
  updateEvent(params: UpdateEventCommand): UpdateEventResult {
    return this.eventRepo.updateEvent(params);
  }
}
