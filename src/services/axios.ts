import Axios from 'axios';

const AxiosInstance = Axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL,
  params: {
    api_key: import.meta.env.VITE_REACT_APP_API_KEY,
  },
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

export { AxiosInstance };
