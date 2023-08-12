import { Prisma, User } from '@prisma/client';
import { CommunityEvent, CommunityEventResponse } from './types';
import z from 'zod';
import { updateCommunityEventReq } from './validations';

export default {
  default: (
    communityEvent: CommunityEvent & { organizer: User },
  ): CommunityEventResponse => ({
    id: communityEvent.id,
    eventType: communityEvent.eventType,
    ideaConfirmed: communityEvent.ideaConfirmed,
    organizer: communityEvent.organizer,
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

  updateRequest(
    requestBody: z.infer<typeof updateCommunityEventReq>['body'],
  ): Prisma.CommunityEventUpdateInput {
    const result = {
      ...requestBody,
      organizer: {
        connect: {
          id: requestBody.organizerUUID,
        },
      },
      eventType: {
        connect: {
          id: requestBody.eventTypeUUID,
        },
      },
    };
    delete result.organizerUUID;
    delete result.eventTypeUUID;
    return result;
  },

  delete: (communityEventId: string) => ({
    id: communityEventId,
  }),
};
