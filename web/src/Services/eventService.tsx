import axios from 'axios';
import { EventType } from '../types';

const baseUrl = 'http://localhost:3001/events';

// Retrieve all Events from the server
const getAll = async () => {
  try {
    const req = await axios.get(baseUrl);
    const eventList: EventType[] = req.data;
    return eventList;
  } catch (e) {
    console.error(e);
  }
};

// Retrieve a single event from the server
const getEvent = async (id: number) => {
  try {
    const req = await axios.get(`${baseUrl}/${id}`);
    const event: EventType = req.data;
    return event;
  } catch (e) {
    console.error(e);
  }
};

export default { getAll, getEvent };
