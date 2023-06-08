import { Body, Controller, Inject, Put } from '@nestjs/common';
import { UpdateEventRes, UpdateEventReq } from './interfaces/dto';
import { EventService } from './interfaces/eventService';

@Controller('/api/v1/event')
export class EventController {
  constructor(
    @Inject(EventService) private readonly eventService: EventService,
  ) {}

  @Put()
  updateEvent(@Body() req: UpdateEventReq): UpdateEventRes {
    return this.eventService.updateEvent(req);
  }
}
