import axiosService from './axiosService';
import { User, NewUser } from '../types';

/* Register */
const register = async (user: NewUser) => {
  console.log('register called');
  console.log('user:', user);
  try {
    // 
    const req = await axiosService.post(`/auth/register`, user);
    const newUser: User = req.data.data;
    console.log('newUser:', newUser)
    return newUser;
  } catch (e) {
    console.error(e);
  }
};

/* Login */
const login = async ({ email, password }: { email: string; password: string }) => {
  try {
    const req = await axiosService.post(`/auth/login`, { email, password });
    const user = req.data.data;
    return user;
  } catch (e) {
    console.error('failed in login:', e);
  }
}

const logout = async () => {
  try {
    const req = await axiosService.get(`/auth/logout`);
    const res = req.data.data;
    return res;
  } catch (e) {
    console.error(e);
  }
}

export default { register, login, logout };