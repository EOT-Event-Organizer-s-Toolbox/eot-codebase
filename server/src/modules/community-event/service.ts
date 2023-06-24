import { prisma } from '../prisma';
import { Prisma } from '@prisma/client';

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
};

export default communityEventService;
