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

export type Note = {
  id: number;
  text: string;
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
  notes?: Note[];
};

// Omits for
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
export type NewPerson = Omit<User, 'id'>;
export type NewNote = Omit<Note, 'id'>;
export type NewEventType = Omit<Event, 'id'>;
