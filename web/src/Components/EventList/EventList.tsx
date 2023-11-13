import EventListSingle from './EventListSingle';
import { CommunityEvent } from '../../types';
import { useLoaderData, useNavigate } from 'react-router-dom';
import LoadingButton from '../Shared/LoadingButton';
import { useState } from 'react';
import * as eventService from '../../Services/eventService';

const EventList = () => {
  const navigate = useNavigate();
  const events = useLoaderData() as CommunityEvent[];
  const [loading, setLoading] = useState(false);
   console.log(events);
  const newCommunityEvent = async () => {
    setLoading(true);
    const event = await eventService.createEvent();
    if (event) {
      setLoading(false);
      navigate(`/edit/${event.id}`);
    }
  };

  if(loading) return <div>Loading...</div>

  return (
    <>
      <section className="flex items-center justify-between pb-4">
        <h2 className="uppercase font-bold text-xl">Upcoming Events</h2>
        <LoadingButton loading={loading} action={newCommunityEvent}>
          New Event
        </LoadingButton>
      </section>

      {events.length > 0
        ? events.map((event) => (
            <EventListSingle key={event.id} event={event} />
          ))
        : 'No events found! Create a new event to get started.'}
    </>
  );
};

export default EventList;
