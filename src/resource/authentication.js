import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import $axios from '../Api';
import {Toaster} from '../utils';

export const loginUser = async ({params, property}) => {
  let Params = {
    user_name: params.user_name,
    user_password: params.user_password,
  };
  console.log(Params);
  return new Promise(resolve => {
    $axios
      .post(`/api/login/user`, Params)
      .then(result => {
        if (result.data.error) {
          Toaster({message: `${result.data.message}`, type: 'error'});
          return resolve(false);
        } else {
          Toaster({message: `${result.data.message}`, type: 'success'});
          console.log('Token', result.data.data[0].token);
          return resolve(result.data.data[0]);
        }
      })
      .catch(e => {
        console.log(e);
        Toaster({message: `${e.message}`, type: 'error'});
        return resolve(false);
      });
  });
};

export const getMenu = async ({params, property}) => {
  let url = `/api/menu/user?section_id=${params.section_id}`;
  console.log(url);
  return new Promise(resolve => {
    $axios
      .get(`${url}`)
      .then(result => {
        return resolve(result.data.data);
      })
      .catch(e => {
        console.log(e);
        Toaster({message: `${e.message}`, type: 'error'});
        return resolve(false);
      });
  });
};
