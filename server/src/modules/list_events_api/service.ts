import { EventType } from './../../../../web/src/types';
import { prisma } from '../prisma';
import { prisma_client } from '@prisma/client';

const eventTypeService = {
  findAll: async () => {
    return prisma.EventType.findMany();
  },
  create: async (params: prisma.eventTypeCreateInput) => {
    params.date = new Date(params.date);
    return prisma.EventType.create({
      data: params,
      include: {
        eventType: true,
        organizer: true,
      },
    });
  },
};

export default eventTypeService;
