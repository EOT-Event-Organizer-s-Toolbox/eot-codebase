export type User = {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
};

export type Note = {
  id: number;
  text: string;
};

export type EventType = {
  id: number;
  eventName: string;
  date: string;
  location: string;
  eventType: string;
  locationConfirmation: boolean;
  postedConfirmation: boolean;
  googleFormSent: boolean;
  organizers: User[];
  venueContactName: string;
  venueContactEmail: string;
  venueContactPhone: string;
  notes: Note[];
};

// Omits for creating new fields
export type NewPerson = Omit<User, 'id'>;
export type NewNote = Omit<Note, 'id'>;
export type NewEventType = Omit<Event, 'id'>;
