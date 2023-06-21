import EventListSingle from './EventListSingle';
import { CommunityEvent } from '../../types';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const EventList = () => {
  const events = useLoaderData() as CommunityEvent[];
  
  const EventButtonLabel = 'New Event';
  const [newEventButtonLabel, setNewEventButtonLabel] =
    useState(EventButtonLabel);
  const newCommunityEvent = () => {
    setNewEventButtonLabel('Hi!');
    setTimeout(() => {
      setNewEventButtonLabel(EventButtonLabel);
    }, 2000);
  };

  return (
    <div>
      <main className='p-4'>
        <div className='flex flex-row justify-between align-middle pb-2'>
          <h1 className="text-2xl font-black uppercase">Event List</h1>
          <button className='bg-slate-200 pr-4 pl-4 pt-1 pb-1' onClick={newCommunityEvent}>{newEventButtonLabel}</button>
        </div>

        {events.map((event) => (
          <EventListSingle key={event.id} event={event} />
        ))}
      </main>
    </div>
  );
};

export default EventList;
