import { CommunityEvent } from '../types';
import axios from 'axios';

const baseUrl = 'http://localhost:3000/community-events';

/** Retrieve all Events from the server */
const getAll = async () => {
  try {
    const req = await axios.get(baseUrl);
    const eventList: CommunityEvent[] = req.data;
    return eventList;
  } catch (e) {
    console.error(e);
  }
};

/** Retrieve a single event from the server */
const getEvent = async (id: string) => {
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

export default { getAll, getEvent, createEvent };
