import { CommunityEvent, CommunityEventResponse } from './types';

export default {
  default: (communityEvent: CommunityEvent) => {
    const fields = [
      'id',
      'eventType',
      'ideaConfirmed',
      'organizer',
      'date',
      'inPersonEvent',
      'onlineEvent',
      'notes',
      'venue',
      'venueContactName',
      'venueContactPhone',
      'venueContactEmail',
      'announcementPosted',
      'signUpFormSent',
      'volunteersNeeded',
      'voluneerRequestsSent',
    ];
    const fieldMap: CommunityEventResponse = fields.reduce(
      (map: { [key: string]: any }, field) => {
        map[field] = (communityEvent as { [key: string]: any })[field];
        if (field === 'eventType' && communityEvent.eventType) {
          map[field] = communityEvent[field];
        }
        if (field === 'organizer' && communityEvent.organizer) {
          map[
            field
          ] = `${communityEvent[field].firstName} ${communityEvent[field].lastName}`;
        }
        return map;
      },
      {},
    );
    return fieldMap;
  },
};
