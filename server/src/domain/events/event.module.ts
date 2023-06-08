import { Module } from '@nestjs/common';
import { EventController } from './event.controller';
import { EventServiceProvider } from './interfaces/eventService';
import { EventServiceImpl } from './event.service';
import { EventRepositoryImpl } from './event.repository';
import { EventRepositoryProvider } from './interfaces/eventRepository';

@Module({
  controllers: [EventController],
  providers: [
    EventServiceProvider(EventServiceImpl),
    EventRepositoryProvider(EventRepositoryImpl),
  ],
})
export class EventModule {}
