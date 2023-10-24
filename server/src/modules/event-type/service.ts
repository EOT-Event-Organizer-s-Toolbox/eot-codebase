import { prisma } from '../prisma';
import { Prisma } from '@prisma/client';
import { NotFoundError } from '../../utils/errors';

const eventTypeService = {
  findAll: async () => {
    return await prisma.eventType.findMany();
  },
  findById: async (eventTypeId: string) => {
    return prisma.eventType.findUnique({
      where: { id: eventTypeId },
    });
  },
  create: async (params: Prisma.EventTypeCreateInput) => {
    return prisma.eventType.create({
      data: params,
    });
  },
  updateById: async (
    eventTypeId: string,
    updateData: Prisma.EventTypeUpdateInput,
  ) => {
    const existingEventType = !!(await prisma.eventType.findUnique({
      where: { id: eventTypeId },
    }));

    if (!existingEventType) {
      throw new NotFoundError(
        `Could not find event type with id ${eventTypeId}`,
      );
    }

    return await prisma.eventType.update({
      data: updateData,
      where: { id: eventTypeId },
    });
  },
  deleteById: async (eventTypeId: string) => {
    const existingEventType = !!(await prisma.eventType.findUnique({
      where: { id: eventTypeId },
    }));

    if (!existingEventType) {
      throw new NotFoundError(
        `Could not find event type with id ${eventTypeId}`,
      );
    }
    const deletedEventType = await prisma.eventType.delete({
      where: { id: eventTypeId },
    });

    return deletedEventType.id;
  },
};

export default eventTypeService;
