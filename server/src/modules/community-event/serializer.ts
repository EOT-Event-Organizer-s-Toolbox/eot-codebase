import { CommunityEvent, CommunityEventResponse } from './types';

export default {
  default: (communityEvent: CommunityEvent) => {
    const fields = [
      'id',
      'event_type',
      'idea_confirmed',
      'organizer',
      'date',
      'in_person_event',
      'online_event',
      'notes',
      'venue',
      'venue_contact_name',
      'venue_contact_phone',
      'venue_contact_email',
      'announcement_posted',
      'sign_up_form_sent',
      'volunteers_needed',
      'voluneer_requests_sent',
    ];
    const fieldMap: CommunityEventResponse = fields.reduce(
      (map: { [key: string]: any }, field) => {
        map[field] = (communityEvent as { [key: string]: any })[field];
        if (field === 'event_type' && communityEvent.event_type) {
          map[field] = communityEvent[field];
        }
        if (field === 'organizer' && communityEvent.organizer) {
          map[
            field
          ] = `${communityEvent[field].first_name} ${communityEvent[field].last_name}`;
        }
        return map;
      },
      {},
    );
    return fieldMap;
  },
};
