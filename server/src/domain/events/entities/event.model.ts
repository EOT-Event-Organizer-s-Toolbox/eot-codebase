import { EventType } from './eventType.model';
import { User } from '../../user/entities/user.model';

export type Event = {
  id: number;
  type: EventType;
  ideaConfirmed: boolean;
  organzer: User;
  date: Date;
  inPersonEvent: boolean;
  onlineEvent: boolean;
  notes: string;
  venue: string;
  venueContactName: string;
  venueContactPhone: string;
  venueContactEmail: string;
  announcementPosted: boolean;
  signUpFormSent: boolean;
  volunteersNeeded: number;
  volunteerRequestSent: boolean;
};
