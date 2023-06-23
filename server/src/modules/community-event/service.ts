import { prisma } from '../prisma';
import { CreateParams } from './types';

const communityEventService = {
  findAll: async () => {
    return prisma.communityEvent.findMany();
  },
  create: async (params: CreateParams) => {
    params.date = new Date(params.date);
    return prisma.communityEvent.create({
      data: params,
      include: {
        event_type: true,
        organizer: true,
      },
    });
  },
};

export default communityEventService;
