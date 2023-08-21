import { prisma } from '../prisma';
import { Prisma } from '@prisma/client';
import { NotFoundError } from '../../utils/errors';
import z from 'zod';
import { updateCommunityEventReq } from './validations';
import communityEventSerializer from './serializer';

const communityEventService = {
  findAll: async () => {
    return await prisma.communityEvent.findMany({
      include: {
        eventType: true,
        organizer: true,
      },
    });
  },
  findById: async (communityEventId: string) => {
    const exisitngEvent = await prisma.communityEvent.findUnique({
      where: { id: communityEventId },
      include: {
        eventType: true,
        organizer: true,
      },
    });

    if (!exisitngEvent) {
      throw new NotFoundError(
        `Community Event with id ${communityEventId} not found`,
      );
    }
    console.log(exisitngEvent)
    return exisitngEvent;
  },
  create: async (params: Prisma.CommunityEventCreateInput, userId: string) => {
    return prisma.communityEvent.create({
      data: {
        ...params,
        organizer: {
          connect: {
            id: userId,
          },
        },
      },
      include: {
        eventType: true,
        organizer: true,
      },
    });
  },

  /**
   * This service is used the to update a community event with a specific ID.
   *
   * @param communityEventId
   * @param updateData
   * @returns
   */
  updateById: async (
    communityEventId: string,
    updateData: z.infer<typeof updateCommunityEventReq>['body'],
  ) => {
    const existingCommunityEvent = !!(await prisma.communityEvent.findUnique({
      where: { id: communityEventId },
    }));

    if (!existingCommunityEvent) {
      throw new NotFoundError(
        `Could not find community event with id ${communityEventId}`,
      );
    }

    return await prisma.communityEvent.update({
      data: communityEventSerializer.updateRequest(updateData),
      where: { id: communityEventId },
      include: {
        eventType: true,
        organizer: true,
      },
    });
  },

  /**
   * This service deletes a community event by a specific ID.
   * @param communityEventId
   * @returns
   */
  deleteById: async (communityEventId: string) => {
    const existingCommunityEvent = !!(await prisma.communityEvent.findUnique({
      where: { id: communityEventId },
    }));

    if (!existingCommunityEvent) {
      throw new NotFoundError(
        `Could not find community event with id ${communityEventId}`,
      );
    }

    const deletedCommunityEvent = await prisma.communityEvent.delete({
      where: { id: communityEventId },
    });

    return deletedCommunityEvent.id;
  },
};

export default communityEventService;
