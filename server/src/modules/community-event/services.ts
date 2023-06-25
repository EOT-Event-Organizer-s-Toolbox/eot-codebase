import { Prisma, CommunityEvent } from '@prisma/client';
import { prisma } from '../prisma';
import { NotFoundError } from '../../utils/errors';

const communityEventService = {
  updateEventById: async (
    communityEventId: string,
    updateData: Prisma.CommunityEventUpdateInput,
  ): Promise<CommunityEvent> => {
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

export default communityEventService