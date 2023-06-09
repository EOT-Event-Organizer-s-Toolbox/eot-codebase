import { useLoaderData } from 'react-router-dom';
import { CommunityEvent } from '../../types';
import { Link } from 'react-router-dom';

const EventDetails = () => {
  const event = useLoaderData() as CommunityEvent;
  return (
    <>
      <h2>Event Details</h2>
      <p>{event.eventType.type}</p>
      <p>{event.venue}</p>
      <p>{event.date}</p>
      <Link to="/">Return to Event List</Link>
    </>
  );
};

export default EventDetails;
