import $axios from '../Api';
import {Toaster} from '../utils';

export const getUser = async ({params, property}) => {
  let url = `/api/master/user?${new URLSearchParams(params).toString()}`;
  console.log(url);
  return new Promise(resolve => {
    $axios
      .get(url)
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
export const deleteUser = async ({params, property}) => {
  let url = `/api/master/user`;
  let body = {data: params};
  console.log(url, body);
  return new Promise(resolve => {
    $axios
      .delete(url, body)
      .then(result => {
        let res = result.data;
        Toaster({message: `${res.message}`, type: res.error});
        return resolve(true);
      })
      .catch(e => {
        console.log(e);
        Toaster({message: `${e.message}`, type: 'error'});
        return resolve(false);
      });
  });
};
