import { EventType } from '../../types';

interface Props {
  eventList: EventType[];
}

const EventListSingle = ({ eventList }: Props) => {
  console.log('SINGLE', eventList);
  return <div className="placeholder">EventListPage</div>;
};

export default EventListSingle;
