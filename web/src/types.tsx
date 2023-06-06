export type User = {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  role: string;
  eventRegistrationComplete: boolean;
};

export type EventType = {
  id: number;
  type: string;
  description: string;
  active: boolean;
};

export type CommunityEvent = {
  id: number;
  eventType: EventType;
  eventIdeaConfirmed: boolean;
  eventOrganizer: string;
  eventDate: string;
  inPerson: boolean;
  online: boolean;
  eventNotes?: string;
  eventVenue: string;
  venueContactName?: string;
  venueContactPhone?: string;
  venueContactEmail?: string;
  eventAnnounced: boolean;
  eventSignupSent: boolean;
  numVolunteersNeeded: number;
  volunteerSignupSent: boolean;
};

// Omits public view of data
export type NonSensitiveCommunityEvent = Omit<
  CommunityEvent,
  | 'eventIdeaConfirmed'
  | 'venueContactName'
  | 'venueContactPhone'
  | 'venueContactEmail'
  | 'eventAnnounced'
  | 'eventSignupSent'
  | 'numVolunteersNeeded'
  | 'volunteerSignupSent'
>;

// Omits for creating new entries
export type NewUser = Omit<User, 'id'>;
export type NewEventType = Omit<EventType, 'id'>;
export type NewCommunityEvent = Omit<CommunityEvent, 'id'>;
