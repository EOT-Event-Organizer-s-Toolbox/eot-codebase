import axiosService from './axiosService';
import { CommunityEventType } from '../types';

const baseUrl = '/event-types';

/* Retrieve all EventTypes from the server */
const getAll = async () => {
  try {
    const req = await axiosService.get(baseUrl);
    const eventTypes: CommunityEventType[] = req.data.data;
    return eventTypes;
  } catch (e) {
    console.error(e);
  }
};

export default { getAll };
