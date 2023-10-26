import axios from 'axios';
import { CommunityEventType } from '../types';

const baseUrl = '/api/event-types';

/* Retrieve all EventTypes from the server */
const getAll = async () => {
  try {
    const req = await axios.get(baseUrl);
    const eventTypes: CommunityEventType[] = req.data.data;
    return eventTypes;
  } catch (e) {
    console.error(e);
  }
};

export default { getAll };
