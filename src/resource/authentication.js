import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import $axios from '../apiMertrack';
import {Toaster} from '../utils';

export const loginUserV2 = async ({email = null, password = null}) => {
  var body = {
    ApiName: 'UserLogin',
    Params: {
      email: email,
      password: password,
    },
  };
  console.log(body);
  return new Promise(resolve => {
    $axios
      .post(`/api/general/mobile`, body)
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
