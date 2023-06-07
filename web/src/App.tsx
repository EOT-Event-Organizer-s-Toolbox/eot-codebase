import { useState, useEffect } from 'react';
import { CommunityEvent } from './types';

import eventService from './Services/eventService';
import EventList from './Components/EventList/EventList';

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
      <header>
        <p className="site-name">Event Organizer's Toolbox</p>
      </header>
      <section className="main-content">
        <EventList eventList={eventList} />
      </section>
    </main>
  );
}

export default App;
