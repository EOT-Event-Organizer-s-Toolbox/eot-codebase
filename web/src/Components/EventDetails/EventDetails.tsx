import { useLoaderData } from 'react-router-dom';
import { CommunityEvent } from '../../types';
import { Link } from 'react-router-dom';
import { formatDateWritten, getDayOfWeek, isDateValid } from '../../utils/date';
import Task from './Task';

const EventDetails = () => {
  const event = useLoaderData() as CommunityEvent;

  if (!event.date && !event.eventType) {
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
    );
  }

  let dateDetails = 'Date TBD';
  if (event.date && isDateValid(event.date)) {
    dateDetails = `${getDayOfWeek(event.date)}, ${formatDateWritten(
      event.date,
    )}`;
  }

  return (
    <>
      <section className="flex flex-wrap flex-row justify-between align-middle p-3 bg-zinc-100 mb-2">
        <div className="flex flex-wrap flex-col gap-2 justify-between">
          <h1 className="text-2xl leading-6 flex flex-row flex-wrap gap-2 font-black uppercase">
            <span>{event.eventType ? event.eventType.type : 'New Event'}</span>
            {event.onlineEvent && '(Online)'}
          </h1>
          <p className="text-lg font-bold whitespace-nowrap">{dateDetails}</p>
          {event.organizer && (
            <p className="font-semibold">
              Organizer:{' '}
              {`${event.organizer?.firstName} ${event.organizer?.lastName}`}
            </p>
          )}
        </div>
        <div className="self-center"></div>
      </section>
      {event.inPersonEvent &&
        ![
          event.venue,
          event.venueContactName,
          event.venueContactPhone,
          event.venueContactEmail,
        ].every((v) => !v) && (
          <section className="p-3 bg-zinc-100 mb-2">
            <h2 className="text-xl font-black uppercase">Venue Details</h2>
            {event.venue && <p>Venue: {event.venue}</p>}
            {event.venueContactName && <p>Contact: {event.venueContactName}</p>}
            {event.venueContactPhone && <p>Phone: {event.venueContactPhone}</p>}
            {event.venueContactEmail && <p>email: {event.venueContactEmail}</p>}
          </section>
        )}
      <section className="p-3 bg-zinc-100 mb-2">
        <h2 className="text-xl font-black uppercase">Event Checklist</h2>
        <Task label="Idea Confirmed" isComplete={event.ideaConfirmed} />
        <Task label="Sign-up Form Sent" isComplete={event.signUpFormSent} />
        <Task
          label="Announcement Posted"
          isComplete={event.announcementPosted}
        />
        {event.volunteersNeeded && event.volunteersNeeded > 0 && (
          <Task
            label="Volunteer Requests Sent"
            isComplete={event.volunteerRequestsSent}
          />
        )}
      </section>
      {event.volunteersNeeded && event.volunteersNeeded > 0 && (
        <section className="p-3 bg-zinc-100 mb-2">
          <h2 className="text-xl font-black uppercase">Volunteer Details</h2>
          <p className="font-semibold">
            Number of volunteers needed: {event.volunteersNeeded}
          </p>
        </section>
      )}
      {event.notes && (
        <section className="p-3 bg-zinc-100 mb-2">
          <h2 className="text-xl font-black uppercase">Notes</h2>
          <p>{event.notes}</p>
        </section>
      )}
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
