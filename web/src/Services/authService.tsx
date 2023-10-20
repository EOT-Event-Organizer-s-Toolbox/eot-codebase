import axios from 'axios';
import { User, NewUser } from '../types';

const baseUrl = 'http://localhost:3000/api/auth';

/* Register */
const register = async (user: NewUser) => {
  console.log('register called');
  console.log('user:', user);
  try {
    // 
    const req = await axios.post(`${baseUrl}/register`, user);
    const newUser: User = req.data.data;
    return newUser;
  } catch (e) {
    console.error(e);
  }
};


export default { register };