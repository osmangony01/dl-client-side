import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://dl-task-server.vercel.app',
  // You can also include other Axios configuration options here
});

export default axiosInstance;