import { useState, useEffect } from 'react';
import { CommunityEvent } from './types';

import './App.css';
import eventService from './Services/eventService';
import EventList from './Components/EventList';

function App() {
  const [eventList, setEventsList] = useState<CommunityEvent[] | undefined>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const allEvents = await eventService.getAll();
      setEventsList(allEvents);
    };
    fetchEvents();
  }, []);

  return (
    <main>
      <h1>Event Organizer's Toolbox</h1>
      <EventList eventList={eventList} />
    </main>
  );
}

export default App;
