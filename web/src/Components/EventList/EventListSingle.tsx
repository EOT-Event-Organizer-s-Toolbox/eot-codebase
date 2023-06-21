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
    <section 
      className="flex justify-between flex-col md:flex-row md:align-middle p-3 md:py-1.5 md:gap-2 bg-zinc-100 mb-2 hover:bg-zinc-200"
    >
      <div 
        onClick={() => handleView(event.id)}
        className='flex flex-col md:flex-row md:align-middle md:gap-2 cursor-pointer'>
        <h3 className='font-semibold'>
          {`${event.eventType.type} - ${getDayOfWeek(event.date)}, ${formatDateWritten(event.date)}`}
        </h3>
        <p className='text-xs -mt-1 md:m-0 pb-2 md:pb-0 md:leading-loose'>
          {event.venue}
        </p>
        <div className='flex flex-wrap flex-row md:align-middle gap-1 text-xs md:leading-loose'>
          {event.onlineEvent &&
            <div className="text-center leading-loose p-4 pb-0 pt-0 rounded-lg bg-zinc-300">
              Online Event
            </div>
          }
          {event.inPersonEvent && 
            <div className="text-center leading-loose p-4 pb-0 pt-0 rounded-lg bg-zinc-300">
              In Person Event
            </div>
          }
          {event.ideaConfirmed && 
            <div className="text-center leading-loose p-4 pb-0 pt-0 rounded-lg bg-zinc-300">
              Confirmed
            </div>
          }
          {event.announcementPosted && 
            <div className="text-center leading-loose p-4 pb-0 pt-0 rounded-lg bg-zinc-300">
              Posted
            </div>
          }
          {event.signUpFormSent && 
            <div className="text-center leading-loose p-4 pb-0 pt-0 rounded-lg bg-zinc-300">
              Sign-up Form Sent
            </div>
          }
        </div>
      </div>
      <div className='hidden md:flex md:flex-row md:justify-center md:align-middle md:gap-2 z-50'>
        <button className="bg-zinc-400 px-4 py-0 self-center text-white text-xs leading-loose hover:bg-lime-600" onClick={() => handleView(event.id)}>View</button>
        <button className="bg-zinc-400 px-4 py-0 text-white self-center text-xs leading-loose hover:bg-red-600" onClick={() => handleDelete(event.id)}>Delete</button>
      </div>
    </section>
  );
};

export default EventListSingle;
