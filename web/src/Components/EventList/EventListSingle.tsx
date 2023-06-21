import { useNavigate } from 'react-router-dom';
import { CommunityEvent } from '../../types';
import { formatDateWritten, getDayOfWeek } from '../../utils/date';

interface Props {
  event: CommunityEvent | undefined;
}

const EventListSingle = ({ event }: Props) => {
  console.log('SINGLE', event);
  const navigate = useNavigate();

  const handleView = (id: string) => {
    //TODO - this route should perhaps be /event/:id
    navigate(`/${id}`);
  }

  const handleDelete = (id: string) => {
    // TODO - implement delete
    console.log('DELETE', id)
  };

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
      <div>
        {event.onlineEvent && <div>Online Event</div>}
        {event.inPersonEvent && <div>In Person Event</div>}
        {event.ideaConfirmed && <div>Confirmed</div>}
        {event.announcementPosted && <div>Posted</div>}
        {event.signUpFormSent && <div>Sign-up Form Sent</div>}
      </div>
      <div>
        <button onClick={() => handleView(event.id)}>View</button>
        <button onClick={() => handleDelete(event.id)}>Delete</button>
      </div>
    </section>
  );
};

export default EventListSingle;
