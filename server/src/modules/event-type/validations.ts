import { z } from 'zod';

/**
 * Validation schema for the create Event Type Request
 */
export const createEventTypeReq = z.object({
  body: z.object({
    type: z.string(),
    description: z.string().optional(),
    active: z.boolean(),
  }),
});

/**
 * Validation schema for the update Event Type Request
 */
export const updateEventTypeReq = z.object({
  body: z.object({
    id: z.string().uuid(),
    type: z.string(),
    description: z.string().optional(),
    active: z.boolean(),
  }),
});

/**
 * Validation schema for the delete Event Type Request
 */

export const deleteEventTypeReq = z.object({
  params: z.object({
    id: z.string().uuid(),
  }),
});
