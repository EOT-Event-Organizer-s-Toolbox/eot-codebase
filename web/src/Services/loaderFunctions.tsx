import { LoaderFunction, LoaderFunctionArgs } from 'react-router-dom';
import eventService from './eventService';
import { CommunityEvent } from '../types';

export const eventsLoader: LoaderFunction = async () => {
  const events: CommunityEvent[] | undefined = await eventService.getAll();
  if (!events) return null;

  const newEvents: CommunityEvent[] = [];

  const eventsWithDate = events.filter((event) => {
    if (!event.date) {
      event.date = 'TBD';
      newEvents.push(event);
      return false;
    }
    return true;
  });

  const sortedEvents = eventsWithDate.sort((a, b) => {
    return a.date && b.date ? a.date.localeCompare(b.date) : 0;
  });

  return newEvents.concat(sortedEvents);
};

export const eventDetailsLoader: LoaderFunction = async ({
  params,
}: LoaderFunctionArgs) => {
  if (!params.id) return null;
  return await eventService.getEvent(params.id);
};
