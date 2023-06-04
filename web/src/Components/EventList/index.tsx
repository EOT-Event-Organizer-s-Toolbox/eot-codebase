import EventListSingle from './EventListSingle';
import { EventType } from '../../types';

interface Props {
  eventList: EventType[] | undefined;
}

const EventList = ({ eventList }: Props) => {
  return (
    <div className="placeholder">
      EventList
      <EventListSingle eventList={eventList} />
    </div>
  );
};

export default EventList;
