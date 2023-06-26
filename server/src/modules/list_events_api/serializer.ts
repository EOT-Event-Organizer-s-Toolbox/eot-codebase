import { EventType, EventTypeResponse } from './types';

export default {
  default: (eventType: EventType): EventTypeResponse => ({
    type: EventType.type,
    description: EventType.description,
    active: EventType.active,
    CommunityEvent: EventType.CommunityEvent,
  }),
};
