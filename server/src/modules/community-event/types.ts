import {
  CommunityEvent as CommunityEventPrisma,
  EventType,
  User,
} from '@prisma/client';
import { Modify } from '../../utils/types';

export type CommunityEvent = CommunityEventPrisma & {
  eventType: EventType;
  organizer: User;
};

export type CommunityEventResponse = Modify<
  Omit<
    CommunityEvent,
    'typeId' | 'organizerId' | 'announcementPosted' | 'volunteersNeeded'
  >,
  {
    organizer: User;
    eventAnnounced: boolean;
    numVolunteersNeeded: number;
  }
>;
