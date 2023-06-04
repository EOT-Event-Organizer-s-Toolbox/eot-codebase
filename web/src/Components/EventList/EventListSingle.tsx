import { EventType } from '../../types';

interface Props {
  event: EventType | undefined;
}

const EventListSingle = ({ event }: Props) => {
  console.log('SINGLE', event);
  return <div className="placeholder">{event?.eventName}</div>;
};

export default EventListSingle;
