import axios from 'axios';
import { User, NewUser } from '../types';

/* Register */
const register = async (user: NewUser) => {
  try {
    //
    const req = await axios.post(`/api/auth/register`, user);
    const newUser: User = req.data.data;
    return newUser;
  } catch (e) {
    console.error('failed to register');
  }
};

/* Login */
const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const req = await axios.post(`/api/auth/login`, { email, password });
    const user = req.data.data;
    return user;
  } catch (e) {
    console.error('failed to login');
  }
};

const logout = async () => {
  try {
    const req = await axios.get(`/api/auth/logout`);
    const res = req.data.data;
    return res;
  } catch (e) {
    console.error('failed to logout');
  }
};

const me = async () => {
  try {
    const req = await axios.get(`/api/auth/user`);
    const user = req.data;
    return user;
  } catch (e) {
    console.error('failed to get user');
  }
}

export default { register, login, logout, me };
