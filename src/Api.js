import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const $axios = axios.create();
$axios.defaults.timeout = 600000;
$axios.interceptors.request.use(
  async config => {
    let token = JSON.parse(await AsyncStorage.getItem('token'));
    let url = `${await AsyncStorage.getItem('endpoint')}`;
    config.baseURL = url;
    if (token) {
      config.headers = {
        'Content-Type': 'application/json',
        token: `${token}`,
      };
    } else {
      config.headers = {
        'Content-Type': 'application/json',
        token: `OY0TC9T7iyCbHGtixotgyXzDbXR4cnMP`,
      };
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default $axios;
