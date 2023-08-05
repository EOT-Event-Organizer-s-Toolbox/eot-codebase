import { prisma } from '../prisma';
import { Prisma } from '@prisma/client';
import { NotFoundError } from '../../utils/errors';

const communityEventService = {
  findAll: async () => {
    return await prisma.communityEvent.findMany({
      include: {
        eventType: true,
        organizer: true,
      },
    });
  },
  create: async (params: Prisma.CommunityEventCreateInput) => {
    return prisma.communityEvent.create({
      data: params,
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
    updateData: Prisma.CommunityEventUpdateInput,
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
      data: updateData,
      where: { id: communityEventId },
      include: {
        eventType: true,
        organizer: true,
      },
    });
  },
};

export default communityEventService;
