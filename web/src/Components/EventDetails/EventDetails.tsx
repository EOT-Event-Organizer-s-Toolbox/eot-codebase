import { useLoaderData } from 'react-router-dom';
import { CommunityEvent } from '../../types';
import { Link } from 'react-router-dom';
import { formatDateWritten, getDayOfWeek, isDateValid } from '../../utils/date';

type CheckListProps = {
  label: string;
  data: boolean | undefined;
}

const CheckList = ({label, data} : CheckListProps)  => {
  return (
      <div className="flex flex-row gap-2">
        <h3 className="font-semibold">{label}?</h3>
        
        <p className="font-black">
          {data ? <span className="text-lime-600">Yes</span> : <span className="text-red-500">No</span>}
        </p>
      </div>
    );
};

const EventDetails = () => {
  const event = useLoaderData() as CommunityEvent;

  if (!event.date && !event.eventType){
    return (
      <section className="flex justify-between flex-col p-3 bg-zinc-100 mb-2">
        <div className="flex flex-wrap flex-row md:align-middle gap-1 text-xs md:leading-loose">
          <h1 className="text-2xl font-black uppercase">New Event</h1>
        </div>
        <div>
          <h3 className="font-semibold">
            <Link to={`/edit/${event.id}`}>Edit Event</Link>
          </h3>
        </div>
      </section>
    )
  }

  let dateDetails = 'Date TBD';
  if(event.date && isDateValid(event.date)){
    dateDetails = `${getDayOfWeek(event.date)}, ${formatDateWritten(event.date)}`;
  }

  return (
    <>
      <section className="flex flex-wrap flex-row justify-between align-middle p-3 bg-zinc-100 mb-2">
        <div className="flex flex-wrap flex-col gap-2 justify-between">
          <h1 className="text-2xl leading-6 flex flex-row flex-wrap gap-2 font-black uppercase">
            <span>{event.eventType ? event.eventType.type : 'Unnamed Event'}</span>
            {event.onlineEvent && "(Online)"}
          </h1>
          <p className='text-lg font-bold whitespace-nowrap'>{dateDetails}</p>
          <p className="font-semibold">Organizer: {event.organizer}</p>
        </div>
        <div className='self-center'>
          
        </div>
        </section>
        {event.inPersonEvent && 
          <section className="p-3 bg-zinc-100 mb-2">
            <h2 className="text-xl font-black uppercase">Venue Details</h2>
            <p>Venue: {event.venue}</p>
            <p>Contact: {event.venueContactName}</p>
            <p>Phone: {event.venueContactPhone}</p>
            <p>email: {event.venueContactEmail}</p>
          </section>
        } 
        <section className="p-3 bg-zinc-100 mb-2">
          <h2 className="text-xl font-black uppercase">Event Checklist</h2>
          <CheckList label="Idea Confirmed" data={event.ideaConfirmed} />
          <CheckList label="Sign-up Form Sent" data={event.signUpFormSent} />
          <CheckList label="Announcement Posted" data={event.announcementPosted} />
          <CheckList label="Volunteer Requests Sent" data={event.volunteerRequestsSent} />
        </section>
        <section className="p-3 bg-zinc-100 mb-2">
          <h2 className="text-xl font-black uppercase">Volunteer Details</h2>
          <p className="font-semibold">Number of volunteers needed: {event.numVolunteersNeeded}</p>
        </section>
        <section className="p-3 bg-zinc-100 mb-2">
          <h2 className="text-xl font-black uppercase">Notes</h2>
          {event.notes && <p>{event.notes}</p>}
        </section>
      <footer className="flex flex-row align-middle gap-3 p-3 bg-zinc-700">
        <Link 
          to="/"
          className="bg-zinc-400 px-4 py-1 self-baseline text-white text-xs leading-loose hover:bg-lime-600"
        >
          Return to Event List
        </Link>
        <Link 
          to={`/edit/${event.id}`}
          className="bg-zinc-400 px-4 py-1 text-white text-xs leading-loose hover:bg-lime-600"
        >
          Edit Event
        </Link>
        
        
      </footer>
    </>
  );
};

export default EventDetails;
