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
    organizer: string;
    eventAnnounced: boolean;
    numVolunteersNeeded: number;
  }
>;

export type CreateParams = {
  typeId: string;
  ideaConfirmed?: boolean;
  organizerId: string;
  date: string | Date;
  inPersonEvent?: boolean;
  onlineEvent?: boolean;
  notes?: string;
  venue?: string;
  venueContactName?: string;
  venueContactPhone?: string;
  venueContactEmail?: string;
  announcementPosted?: boolean;
  signUpFormSent?: boolean;
  volunteersNeeded: number;
  volunteerRequestsSent?: boolean;
};
