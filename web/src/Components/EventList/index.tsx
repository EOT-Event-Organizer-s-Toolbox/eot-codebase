import EventListSingle from './EventListSingle';
import { CommunityEvent } from '../../types';

interface Props {
  eventList: CommunityEvent[] | undefined;
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
