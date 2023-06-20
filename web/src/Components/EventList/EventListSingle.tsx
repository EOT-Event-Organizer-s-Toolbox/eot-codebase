import { Link } from 'react-router-dom';
import { CommunityEvent } from '../../types';
import { formatDateWritten, getDayOfWeek } from '../../utils/date';

interface Props {
  event: CommunityEvent | undefined;
}

const EventListSingle = ({ event }: Props) => {
  console.log('SINGLE', event);

  if (!event) {
    return null;
  }

  return (
    <section>
      <h3>
        <span>{event.eventType.type}</span>
        <span>-</span>
        <span>{`${getDayOfWeek(event.date)},`}</span>
        <span>{formatDateWritten(event.date)}</span>
      </h3>
      <p>{event.venue}</p>
      <div></div>
      <Link to={event.id}>Click Me For Details</Link>
    </section>
  );
};

export default EventListSingle;
