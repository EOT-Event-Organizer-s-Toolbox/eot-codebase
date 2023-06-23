import {
  CommunityEvent as CommunityEventPrisma,
  EventType,
  User,
} from '@prisma/client';

export type CommunityEvent = CommunityEventPrisma & {
  event_type: EventType;
  organizer: User;
};

export type CommunityEventResponse = Partial<CommunityEvent>;

export type CreateParams = {
  type_id: string;
  idea_confirmed?: boolean;
  organizer_id: string;
  date: string | Date;
  in_person_event?: boolean;
  online_event?: boolean;
  notes?: string;
  venue?: string;
  venue_contact_name?: string;
  venue_contact_phone?: string;
  venue_contact_email?: string;
  announcement_posted?: boolean;
  sign_up_form_sent?: boolean;
  volunteers_needed: number;
  voluneer_requests_sent?: boolean;
};
