import EventListSingle from './EventListSingle';
import { CommunityEvent } from '../../types';
import { useLoaderData, useNavigate } from 'react-router-dom';
import LoadingButton from '../Shared/LoadingButton';
import { useState } from 'react';
import * as eventService from '../../Services/eventService';
import { InvalidateQueryFilters, useQueryClient } from '@tanstack/react-query';
import { startOfDay, isAfter } from 'date-fns';

const EventList = () => {
  const navigate = useNavigate();
  const events = useLoaderData() as CommunityEvent[];
  const [loading, setLoading] = useState(false);
  const queryClient = useQueryClient();
  
  const newCommunityEvent = async () => {
    setLoading(true);
    const event = await eventService.createEvent();
    if (event) {
      setLoading(false);
      queryClient.invalidateQueries(['community-events'] as InvalidateQueryFilters);
      navigate(`/edit/${event.id}`);
    }
  };
  
  /* Sort into current and past events */
  const upcomingEvents: CommunityEvent[] = [];
  const pastEvents: CommunityEvent[] = [];

  if (events.length > 0) {
    events.forEach((event: CommunityEvent) => {
      if (event.date) {
        const eventDate = new Date(event.date);
        const today = startOfDay(new Date());
  
        if (isAfter(eventDate, today) || eventDate.getDate() === today.getDate()) {
          upcomingEvents.push(event);
        } else {
          pastEvents.push(event);
        }
      }
    });
  }

  if(loading) return <div>Loading...</div>

  return (
    <>
      <section className='pt-6' >
        <div className="flex items-center justify-between pb-4">
          <h2 className="uppercase font-bold text-2xl">Upcoming Events</h2>
          <LoadingButton loading={loading} action={newCommunityEvent}>
            New Event
          </LoadingButton>
        </div>
        {upcomingEvents.length > 0
        ? upcomingEvents.map((event) => (
            <EventListSingle key={event.id} event={event} />
          ))
        : 'No Upcoming events! Create a new event to get started.'}
      </section>

      <section className='pt-10' >
        <div className="flex items-center justify-between pb-4">
          <h2 className="uppercase font-bold text-2xl">Past Events</h2>
        </div>
        {pastEvents.length > 0
        ? pastEvents.map((event) => (
            <EventListSingle key={event.id} event={event} />
          ))
        : 'No Upcoming events! Create a new event to get started.'}
      </section>
    </>
  );
};

export default EventList;
