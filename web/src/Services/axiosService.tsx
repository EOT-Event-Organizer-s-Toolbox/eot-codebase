import axios from "axios";

const axiosService = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:3000/api',
});

export default axiosService;