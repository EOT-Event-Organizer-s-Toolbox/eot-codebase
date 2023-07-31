export type User = {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  role: string;
  eventRegistrationComplete: boolean;
};

export type EventType = {
  id: string;
  type: string;
  description: string;
  active: boolean;
};

export type CommunityEvent = {
  id: string;
  eventType?: EventType;
  ideaConfirmed?: boolean;
  organizer?: string;
  date?: string;
  inPersonEvent: boolean;
  onlineEvent: boolean;
  notes?: string;
  venue?: string;
  venueContactName?: string;
  venueContactPhone?: string;
  venueContactEmail?: string;
  announcementPosted?: boolean;
  signUpFormSent?: boolean;
  numVolunteersNeeded?: number;
  volunteerRequestsSent?: boolean;
};

// Omits public view of data
export type NonSensitiveCommunityEvent = Omit<
  CommunityEvent,
  | 'ideaConfirmed'
  | 'venueContactName'
  | 'venueContactPhone'
  | 'venueContactEmail'
  | 'eventAnnounced'
  | 'signUpFormSent'
  | 'numVolunteersNeeded'
  | 'volunteerRequestsSent'
>;

// Omits for creating new entries
export type NewUser = Omit<User, 'id'>;
export type NewEventType = Omit<EventType, 'id'>;
export type EditCommunityEvent = Omit<CommunityEvent, 'eventType'> & {
  eventTypeUUID: string;
};
