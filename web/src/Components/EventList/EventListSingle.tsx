import { useNavigate } from 'react-router-dom';
import { CommunityEvent } from '../../types';
import { formatDateWritten, getDayOfWeek, isDateValid } from '../../utils/date';

type Props = {
  event: CommunityEvent | undefined;
};
const EventListSingle = ({ event }: Props) => {
  const navigate = useNavigate();

  const handleView = (id: string) => {
    //TODO - this route should perhaps be /event/:id
    //TODO - if above is true then editing should be /event/edit/:id
    navigate(`/${id}`);
  };

  const handleDelete = (id: string) => {
    // TODO - implement delete
    console.log('DELETE', id);
  };

  if (!event) {
    return null;
  }

  // Handle dates that are not yet set
  let dateDetails = 'Date TBD';
  if (event.date && isDateValid(event.date)) {
    dateDetails = `${getDayOfWeek(event.date)}, ${formatDateWritten(
      event.date,
    )}`;
  }
  return (
    <section className="flex justify-between flex-col border-t-secondary border-t-2">
      <div
        onClick={() => handleView(event.id)}
        className="flex flex-col md:flex-row md:align-middle md:gap-2 cursor-pointer"
      >
        <h3 className="font-semibold flex flex-row gap-2">
          <span>{event.eventType ? event.eventType.type : 'New Event'}</span>
          <span>{event.onlineEvent && '(Online)'}</span>
          <span>{dateDetails}</span>
        </h3>
        <p className="text-xs -mt-1 md:m-0 pb-2 md:pb-0 md:leading-loose">
          {event.venue}
        </p>
        <div className="flex flex-wrap flex-row md:align-middle gap-1 text-xs md:leading-loose">
          {event.onlineEvent && (
            <div className="text-center leading-loose p-4 pb-0 pt-0 rounded-lg bg-secondary">
              Online Event
            </div>
          )}
          {event.inPersonEvent && (
            <div className="text-center leading-loose p-4 pb-0 pt-0 rounded-lg bg-secondary">
              In Person Event
            </div>
          )}
          {event.ideaConfirmed && (
            <div className="text-center leading-loose p-4 pb-0 pt-0 rounded-lg bg-secondary">
              Confirmed
            </div>
          )}
          {event.announcementPosted && (
            <div className="text-center leading-loose p-4 pb-0 pt-0 rounded-lg bg-secondary">
              Posted
            </div>
          )}
          {event.signUpFormSent && (
            <div className="text-center leading-loose p-4 pb-0 pt-0 rounded-lg bg-secondary">
              Sign-up Form Sent
            </div>
          )}
        </div>
      </div>
      <div className="hidden md:flex md:flex-row md:justify-center md:align-middle md:gap-2 z-50">
        <button
          className="bg-primary px-4 py-0 self-center text-white text-xs leading-loose hover:bg-secondary"
          onClick={() => handleView(event.id)}
        >
          View
        </button>
        <button
          className="bg-primary px-4 py-0 text-white self-center text-xs leading-loose hover:bg-primary"
          onClick={() => handleDelete(event.id)}
        >
          Delete
        </button>
      </div>
    </section>
  );
};

export default EventListSingle;
