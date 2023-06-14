import { Link } from 'react-router-dom';

const EventDetailsError = () => {
  return (
    <div>
      <h2>Oops, couldn't find that event!</h2>
      <Link to="/">Back to Event List</Link>
    </div>
  );
};

export default EventDetailsError;
