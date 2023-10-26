export type User = {
  id: string;
  firstName: string;
  lastName: string;
  phone?: string;
  email: string;
};

export type CommunityEventType = {
  id: string;
  type: string;
  description: string;
  active: boolean;
};

export type CommunityEvent = {
  id: string;
  eventType?: CommunityEventType;
  ideaConfirmed?: boolean;
  organizer?: User;
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
  volunteersNeeded?: number;
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
  | 'volunteersNeeded'
  | 'volunteerRequestsSent'
>;

// Omits for creating new entries
export type NewUserForm = Omit<User, 'id'> & {
  password: string;
  passwordConfirmation: string;
};
export type NewUser = Omit<User, 'id'> & { password: string };
export type NewCommunityEventType = Omit<CommunityEventType, 'id'>;
export type EditCommunityEvent = Omit<
  CommunityEvent,
  'eventType' | 'id' | 'organizer'
> & {
  eventTypeUUID?: string;
  organizerUUID?: string;
};
