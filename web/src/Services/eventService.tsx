import { CommunityEvent } from '../types';
import axios from 'axios';

const baseUrl = 'http://localhost:3001/events';

// Retrieve all Events from the server
const getAll = async () => {
  try {
    const req = await axios.get(baseUrl);
    const eventList: CommunityEvent[] = req.data;
    return eventList;
  } catch (e) {
    console.error(e);
  }
};

// Retrieve a single event from the server
const getEvent = async (id: string) => {
  try {
    const req = await axios.get(`${baseUrl}/${id}`);
    const event: CommunityEvent = req.data;
    return event;
  } catch (e) {
    console.error(e);
  }
};

export default { getAll, getEvent };
