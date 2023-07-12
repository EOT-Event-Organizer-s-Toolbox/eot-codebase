import { LoaderFunction, LoaderFunctionArgs } from 'react-router-dom';
import eventService from './eventService';
import { CommunityEvent } from '../types';

export const eventsLoader: LoaderFunction = async () => {
  const events: CommunityEvent[] | undefined = await eventService.getAll();
  if (!events) return null;
  return events;
};

export const eventDetailsLoader: LoaderFunction = async ({
  params,
}: LoaderFunctionArgs) => {
  if (!params.id) return null;
  return await eventService.getEvent(params.id);
};
