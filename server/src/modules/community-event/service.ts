import { prisma } from '../prisma';
import { Prisma } from '@prisma/client';
import { NotFoundError } from '../../utils/errors';

const communityEventService = {
  findAll: async () => {
    return prisma.communityEvent.findMany();
  },
  create: async (params: Prisma.CommunityEventCreateInput) => {
    params.date = new Date(params.date);
    return prisma.communityEvent.create({
      data: params,
      include: {
        eventType: true,
        organizer: true,
      },
    });
  },
  updateEventById: async (
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
    });
  },
};

export default communityEventService;
