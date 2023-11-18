import { useNavigate } from 'react-router-dom';
import { CommunityEvent } from '../../types';
import { formatDateWritten, getDayOfWeek, isDateValid } from '../../utils/date';

import { BsPeopleFill, BsLaptopFill } from 'react-icons/bs';
import { MdSpeakerNotes } from 'react-icons/md';
import Avatar from '../Avatar';


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

  if (!event) {
    return null;
  }
  
  const showNotes = () => {
    alert('event note alert placeholder: ' + event.notes)
  }


  // Handle dates that are not yet set
  let dateDetails = 'Date TBD';
  if (event.date && isDateValid(event.date)) {
    dateDetails = `${getDayOfWeek(event.date)}, ${formatDateWritten(
      event.date,
    )}`;
  }

  let location = 'TBD';
  if(event.venue){
    location = event.venue;
  }

  let orgainizer = null;
  if(event.organizer){
    orgainizer = event.organizer;
  }

  return (
    <article className="flex flex-row justify-between items-start sm:items-center gap-2 py-4 border-t-light border-t-2 last:border-b-2 last:border-b-light">
      <figure className="bg-primary w-8 h-8 sm:w-12 sm:h-12 rounded flex justify-center items-center flex-shrink-0">
        {event.inPersonEvent &&
          <BsPeopleFill className="text-white sm:text-2xl" />
        }
        {event.onlineEvent &&
          <BsLaptopFill className="text-white sm:text-2xl" />
        }
        <figcaption className="sr-only">The type of event</figcaption>
      </figure>
      <div className="flex grow flex-col sm:flex-row gap-2 sm:justify-between justify-start sm:items-center items-start">
        <div className="flex flex-col leading-none">
          <h3 className='font-bold text-sm'>{event.eventType?.type} - {dateDetails}</h3>
          <p className='font-thin text-xs'>6PM to 9PM @ {location}</p>
        </div>
        <div className='flex flex-col sm:flex-row grow sm:items-center gap-3 justify-end'>
          <div className="flex flex-col sm:text-right leading-none text-xs font-">
            {event.ideaConfirmed && <div>Idea Confirmed</div>}
            {event.eventAnnounced && <div>Anounced</div>}
            {event.signUpFormSent && <div>Sign up Sent</div>}
            {event.volunteerRequestsSent && <div>Volunteers Requested</div>}
          </div>
          <div className="flex items-center gap-2 text-sm">
            <button className="bg-dark text-white rounded px-2 h-7">Venue Contact</button>
            <button 
              className="bg-primary text-white px-2 h-7 rounded"
              onClick={() => handleView(event.id)}
            >View</button>
            {event.notes?.length && event.notes?.length > 0 ?
            <button 
              className="bg-secondary rounded flex items-center gap-1 px-2 h-7"
              onClick={showNotes}
            >
              note
              <MdSpeakerNotes />
            </button>
            : null
            }
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 order-first sm:order-none">
            <div className="flex flex-row gap-2 sm:gap-0 sm:flex-col sm:text-right leading-tight text-xs">
              <p className="font-bold">Event Organizer</p>
              <p>{`${event.organizer?.firstName} ${event.organizer?.lastName}`}</p>
            </div>
            <div className="hidden sm:block">
              <Avatar user={orgainizer} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default EventListSingle;
