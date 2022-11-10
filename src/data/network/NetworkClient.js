import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import env from '../../common/config/env';

let headers = {};

const axiosInstance = axios.create({baseURL: env.DEV_URL, headers: headers, timeout: 20000});

axiosInstance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  response =>
    new Promise((resolve, reject) => {
      resolve(response.data);
      console.log(response.data);
    }),
  error => {
    if (!error.response) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }

    if (error.response.status === 403) {
      //navigate(LOGOUT, {tokenExpired: true});
    } else {
      return new Promise((resolve, reject) => {
        console.log(error.response.data);
        console.log(error);
        reject(error);
      });
    }
  },
);

export default axiosInstance;
