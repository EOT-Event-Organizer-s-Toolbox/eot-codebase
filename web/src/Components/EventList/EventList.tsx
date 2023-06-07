import EventListSingle from './EventListSingle';
import { EventType } from '../../types';
import { useLoaderData } from 'react-router-dom';

const EventList = () => {
  const events = useLoaderData() as EventType[];
  return (
    <div className="placeholder">
      <h1>EventList</h1>
      {events.map((event) => (
        <EventListSingle key={event.id} event={event} />
      ))}
    </div>
  );
};
export default EventList;
