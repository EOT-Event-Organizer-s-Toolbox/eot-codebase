import axios from 'axios';
import { CommunityEvent, EditCommunityEvent } from '../types';

const baseUrl = '/api/community-events';

/**  Creates a new event */
export const createEvent = async () => {
  try {
    const req = await axios.post(baseUrl, {});
    const event: CommunityEvent = req.data.data;
    return event;
  } catch (e) {
    console.error(e);
  }
};

/* Update an event */
export const updateEvent = async (id: string, event: EditCommunityEvent) => {
  try {
    const req = await axios.put(`${baseUrl}/${id}`, event);
    const updatedEvent: CommunityEvent = req.data.data;
    return updatedEvent;
  } catch (e) {
    console.error(e);
  }
};

export const deleteEvent = async (id: string) => {
  try {
    const req = await axios.delete(`${baseUrl}/${id}`);
    return req.data as string;
  } catch (e) {
    console.error(e);
    throw e;
  }
};
