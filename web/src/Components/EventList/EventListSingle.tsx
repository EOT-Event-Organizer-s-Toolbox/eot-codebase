import { EventType } from '../../types';
import { formatDateWritten } from '../../utils/date';
import { getDayOfWeek } from '../../utils/date';

interface Props {
  event: EventType | undefined;
}

const EventListSingle = ({ event }: Props) => {
  console.log('SINGLE', event);

  if (!event) {
    return null;
  }

  return (
    <section className="event">
      <h3 className="event--detail-section">
        <span className="event--name">{event.eventName}</span>
        <span className="event--name-separator">-</span>
        <span className="event--day">{`${getDayOfWeek(event.date)},`}</span>
        <span className="event--date">{formatDateWritten(event.date)}</span>
      </h3>
      <p className="event--location">{event.location}</p>
      <div className="event--confirmations-container"></div>
    </section>
  );
};

export default EventListSingle;
