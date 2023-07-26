import { CommunityEvent, EditCommunityEvent } from '../types';
import axios from 'axios';

const baseUrl = 'http://localhost:3000/api/community-events';

/* Retrieve all Events from the server */
const getAll = async () => {
  try {
    const req = await axios.get(baseUrl);
    const eventList: CommunityEvent[] = req.data;
    return eventList;
  } catch (e) {
    console.error(e);
  }
};

/* Retrieve a single event from the server */
const getEvent = async (id: string) => {
  console.log('getEvent called');
  try {
    const req = await axios.get(`${baseUrl}/${id}`);
    const event: CommunityEvent = req.data;
    return event;
  } catch (e) {
    console.error(e);
  }
};

/**  Creates a new event */
const createEvent = async () => {
  try {
    const req = await axios.post(baseUrl, {});
    const event: CommunityEvent = req.data;
    return event;
  } catch (e) {
    console.error(e);
  }
};


/* Update an event */
const updateEvent = async (id: string, event: EditCommunityEvent) => {
  try {
    const req = await axios.put(`${baseUrl}/${id}`, event);
    const updatedEvent: CommunityEvent = req.data;
    return updatedEvent;
  } catch (e) {
    console.error(e);
  }
};

export default { getAll, getEvent, createEvent, updateEvent };

