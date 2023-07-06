import { CommunityEvent, CommunityEventResponse } from './types';

export default {
  default: (communityEvent: CommunityEvent): CommunityEventResponse => ({
    id: communityEvent.id,
    eventType: communityEvent.eventType,
    ideaConfirmed: communityEvent.ideaConfirmed,
    organizer:
      communityEvent.organizer &&
      `${communityEvent.organizer.firstName} ${communityEvent.organizer.lastName}`,
    date: communityEvent.date,
    inPersonEvent: communityEvent.inPersonEvent,
    onlineEvent: communityEvent.onlineEvent,
    notes: communityEvent.notes,
    venue: communityEvent.venue,
    venueContactName: communityEvent.venueContactName,
    venueContactPhone: communityEvent.venueContactPhone,
    venueContactEmail: communityEvent.venueContactEmail,
    eventAnnounced: communityEvent.announcementPosted,
    signUpFormSent: communityEvent.signUpFormSent,
    numVolunteersNeeded: communityEvent.volunteersNeeded,
    volunteerRequestsSent: communityEvent.volunteerRequestsSent,
  }),
};
