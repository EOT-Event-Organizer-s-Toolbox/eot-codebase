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
  body: z.object({
    id: z.string().uuid(),
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
