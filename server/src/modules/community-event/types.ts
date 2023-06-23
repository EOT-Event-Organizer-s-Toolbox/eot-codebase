import {
  CommunityEvent as CommunityEventPrisma,
  EventType,
  User,
} from '@prisma/client';

export type CommunityEvent = CommunityEventPrisma & {
  eventType: EventType;
  organizer: User;
};

export type CommunityEventResponse = Partial<CommunityEvent>;

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
  voluneerRequestsSent?: boolean;
};
