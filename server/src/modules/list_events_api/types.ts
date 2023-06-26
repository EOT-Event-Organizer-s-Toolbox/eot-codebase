import { CommunityEvent } from './../community-event/types';
import {
  CommunityEvent,
  EventType as EventTypePrisma,
  User,
} from '@prisma/client';
import { Modify } from '../../utils/types';

export type EventType = EventTypePrisma & {
  eventType: EventType;
  organizer: User;
  type: string;
  description?: string;
  active: boolean;
  CommunityEvent: CommunityEventPrisma[];
};

export type EventTypeResponse = {
  type: string;
  description?: string;
  active: boolean;
  CommunityEvent: CommunityEventPrisma;
};
