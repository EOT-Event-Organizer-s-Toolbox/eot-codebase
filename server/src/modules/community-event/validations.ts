import { z } from 'zod';

export const createCommunityEventReq = z.object({
  body: z
    .object({
      id: z.string().uuid(),
      ideaConfirmed: z.boolean(),
      date: z.coerce.date(),
      inPersonEvent: z.boolean(),
      onlineEvent: z.boolean(),
      notes: z.string(),
      venue: z.string(),
      venueContactName: z.string(),
      venueContactPhone: z.string(),
      venueContactEmail: z.string(),
      announcementPosted: z.boolean(),
      signUpFormSent: z.boolean(),
      volunteersNeeded: z.number(),
      volunteerRequestsSent: z.boolean(),
    })
    .partial(),
});

/**
 * Validation schema for the update Community Event Request
 */
export const updateCommunityEventReq = z.object({
  params: z.object({
    id: z.string().uuid(),
  }),
  body: z.object({
    organizerUUID: z.string().uuid().optional().or(z.literal('')),
    eventTypeUUID: z.string().uuid().optional().or(z.literal('')),
    ideaConfirmed: z.boolean().optional(),
    date: z.coerce.date().optional(),
    inPersonEvent: z.boolean().optional(),
    onlineEvent: z.boolean().optional(),
    notes: z.string().optional(),
    venue: z.string().optional(),
    venueContactName: z.string().optional(),
    venueContactPhone: z.string().optional(),
    venueContactEmail: z.string().optional(),
    announcementPosted: z.boolean().optional(),
    signUpFormSent: z.boolean().optional(),
    volunteersNeeded: z.number().optional(),
    volunteerRequestsSent: z.boolean().optional(),
  }),
});

/**
 * Validation schema for the delete community event request
 */

export const deleteCommunityEventReq = z.object({
  params: z.object({
    id: z.string().uuid(),
  }),
});
