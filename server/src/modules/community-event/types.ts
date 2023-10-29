import {
  CommunityEvent as CommunityEventPrisma,
  EventType,
  User,
} from '@prisma/client';
import { Modify } from '../../utils/types';

export type CommunityEvent = CommunityEventPrisma & {
  eventType?: EventType | null;
  organizer?: User | null;
};

export type CommunityEventResponse = Modify<
  Omit<CommunityEvent, 'typeId' | 'organizerId' | 'announcementPosted'>,
  {
    organizer?: User | null;
    eventAnnounced: boolean;
  }
>;
