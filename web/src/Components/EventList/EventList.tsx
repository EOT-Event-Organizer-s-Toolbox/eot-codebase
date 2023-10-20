import EventListSingle from './EventListSingle';
import { CommunityEvent } from '../../types';
import { useLoaderData } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import LoadingButton from '../Shared/LoadingButton';
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../Shared/context/AuthContext';
import eventService from '../../Services/eventService';


const EventList = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) return null;
  
  const events = useLoaderData() as CommunityEvent[];
  const [loading, setLoading] = useState(false);
  const newCommunityEvent = async () => {
    setLoading(true);
    const event = await eventService.createEvent();
    if (event) {
      setLoading(false);
      navigate(`/edit/${event.id}`);
    }
    console.log('newCommunityEvent');
  };

  return (
    <div>
      <div className="flex flex-row justify-between align-middle pb-2">
        <h1 className="text-2xl font-black uppercase">Event List</h1>
        <LoadingButton loading={loading} action={newCommunityEvent}>
          New Event
        </LoadingButton>
      </div>

        {events.length > 0
          ? events.map((event) => (
              <EventListSingle key={event.id} event={event} />
            ))
          : 'No events found! Create a new event to get started.'}
    </div>
  );
};

export default EventList;
