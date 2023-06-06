import { CommunityEvent } from '../../types';
//import { formatDateWritten } from '../../utils/date';
//import { getDayOfWeek } from '../../utils/date';

interface Props {
  event: CommunityEvent | undefined;
}

const EventListSingle = ({ event }: Props) => {
  console.log('SINGLE', event);

  if (!event) {
    return null;
  }

  return (
    <section className="event">
      <h3 className="event--detail-section">
        <span className="event--name"></span>
        <span className="event--name-separator">-</span>
        <span className="event--day"></span>
        <span className="event--date"></span>
      </h3>
      <p className="event--location"></p>
      <div className="event--confirmations-container"></div>
    </section>
  );
};

export default EventListSingle;
