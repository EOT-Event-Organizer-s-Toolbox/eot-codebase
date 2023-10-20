import { CommunityEvent, EditCommunityEvent } from '../types';
import axiosService from './axiosService';

const baseUrl = '/community-events';

/* Retrieve all Events from the server */
const getAll = async () => {
  try {
    const req = await axiosService.get(baseUrl);
    const eventList: CommunityEvent[] = req.data.data;
    return eventList;
  } catch (e: any) {
    /* Handle error due to no server connection */
    if (e.code === 'ERR_NETWORK') {
      console.error('Network Error - Could not connect to server');
    }
    console.error('error:', e);
  }
};

/* Retrieve a single event from the server */
const getEvent = async (id: string) => {
  try {
    const req = await axiosService.get(`${baseUrl}/${id}`);
    const event: CommunityEvent = req.data.data;
    return event;
  } catch (e: any) {
    if (e.response.status === 404) {
      console.error('Event not found');
    } else {
      console.error(e);
    }
  }
};

/**  Creates a new event */
const createEvent = async () => {
  try {
    const req = await axiosService.post(baseUrl, {});
    const event: CommunityEvent = req.data.data;
    return event;
  } catch (e) {
    console.error(e);
  }
};

/* Update an event */
const updateEvent = async (id: string, event: EditCommunityEvent) => {
  try {
    const req = await axiosService.put(`${baseUrl}/${id}`, event);
    const updatedEvent: CommunityEvent = req.data.data;
    return updatedEvent;
  } catch (e) {
    console.error(e);
  }
};

export default { getAll, getEvent, createEvent, updateEvent };
