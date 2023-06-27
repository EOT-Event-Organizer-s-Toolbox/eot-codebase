import { z } from 'zod';

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
