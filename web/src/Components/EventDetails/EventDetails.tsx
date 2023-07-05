import { useLoaderData } from 'react-router-dom';
import { CommunityEvent } from '../../types';
import { Link } from 'react-router-dom';

const EventDetails = () => {
  const event = useLoaderData() as CommunityEvent;
  return (
    <>
      <h1>Event Details</h1>
      <p>{event.eventType && event.eventType.type}</p>
      <p>{event.venue && event.venue}</p>
      <p>{event.date && event.date}</p>
      <Link to="/">Return to Event List</Link>
      <br />
      <Link to={`/edit/${event.id}`}>Edit Event</Link>
    </>
  );
};

export default EventDetails;
