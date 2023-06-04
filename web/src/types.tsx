export interface Person {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
}

export interface Note {
  id: number;
  text: string;
}

export interface EventType {
  id: number;
  eventName: string;
  date: string;
  location: string;
  eventType: string;
  locationConfirmation: boolean;
  postedConfirmation: boolean;
  googleFormSent: boolean;
  organisers: Person[];
  venueContactName: string;
  venueContactEmail: string;
  venueContactPhone: string;
  notes: Note[];
}

// Omits for creating new fields
export type NewPerson = Omit<Person, 'id'>;
export type NewNote = Omit<Note, 'id'>;
export type NewEventType = Omit<Event, 'id'>;
