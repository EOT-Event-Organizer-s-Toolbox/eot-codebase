import { EventType } from './types';

export default {
  default: (eventType: EventType)  => ({
    id: eventType.id,
    type: eventType.type,
    description: eventType.description && eventType.description,
    active: eventType.active,
  }),

  delete: (eventTypeId: string) => ({
    id: eventTypeId
  }),
}