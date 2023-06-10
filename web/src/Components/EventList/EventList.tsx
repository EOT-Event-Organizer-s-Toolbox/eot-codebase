import EventListSingle from './EventListSingle';
import { CommunityEvent } from '../../types';
import { useState } from 'react';

interface Props {
  eventList: CommunityEvent[] | undefined;
}

const EventList = ({ eventList }: Props) => {
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
    <div className="main-container">
      <main>
        <div className="page-heading-container">
          <h1>EventList</h1>
          <button onClick={newCommunityEvent}>{newEventButtonLabel}</button>
        </div>

        {eventList &&
          eventList.map((event) => (
            <EventListSingle key={event.id} event={event} />
          ))}
      </main>
    </div>
  );
};
export default EventList;
