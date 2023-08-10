import {
  EventType as EventTypePrisma,
  CommunityEvent as CommunityEventPrisma,
} from '@prisma/client';

export type EventType = EventTypePrisma & {
  events?: CommunityEventPrisma[];
}

export type NewEventType = Omit<EventType, 'id' | 'events'>;