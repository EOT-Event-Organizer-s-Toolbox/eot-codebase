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
      <main>
        <div>
          <h1>Event List</h1>
          <button onClick={newCommunityEvent}>{newEventButtonLabel}</button>
        </div>

        {events.map((event) => (
          <EventListSingle key={event.id} event={event} />
        ))}
      </main>
    </div>
  );
};

export default EventList;
