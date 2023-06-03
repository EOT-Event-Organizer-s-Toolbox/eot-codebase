import axios from 'axios';
const baseUrl = 'http://localhost:3001/events';

// Retrieve all Events from the server
const getAll = async () => {
  try {
    const req = await axios.get(baseUrl);
    return req.data;
  } catch (e) {
    console.error(e);
  }
}
// Retrieve a single event from the server
const getEvent = async (id: number) => {
  try {
    const req = await axios.get(`${baseUrl}/${id}`);
    return req.data;
  } catch (e) {
    console.error(e);
  }
};


export default { getAll, getEvent };