import EventListSingle from './EventListSingle';
import { EventType } from '../../types';

interface Props {
  eventList: EventType[] | undefined;
}

const EventList = ({ eventList }: Props) => {
  return (
    <div className="placeholder">
      <h1>EventList</h1>
      {eventList &&
        eventList.map((event) => (
          <EventListSingle key={event.id} event={event} />
        ))}
    </div>
  );
};

export default EventList;
