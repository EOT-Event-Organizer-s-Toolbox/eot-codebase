import { LoaderFunction, LoaderFunctionArgs } from 'react-router-dom';
import eventService from './eventService';

export const eventsLoader: LoaderFunction = async () => {
  const events =  await eventService.getAll();
  
  if(!events) return null;
  
  return events.sort((a, b) => {
    return a.date > b.date ? 1 : -1;
  });
};

export const eventDetailsLoader: LoaderFunction = async ({
  params,
}: LoaderFunctionArgs) => {
  if (!params.id) return null;
  return await eventService.getEvent(params.id);
};
