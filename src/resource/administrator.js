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
export const insertUser = async ({params, property}) => {
  let url = `/api/master/user`;
  let body = params;
  console.log(url, 'Insert', body);
  return new Promise(resolve => {
    $axios
      .put(url, body)
      .then(result => {
        let res = result.data;
        Toaster({
          message: `${res.message}`,
          type: `${res.error ? 'error' : 'success'} `,
        });
        return resolve(res);
      })
      .catch(e => {
        console.log(e);
        Toaster({message: `${e.message}`, type: 'error'});
        return resolve(false);
      });
  });
};

export const updateUser = async ({params, property}) => {
  let url = `/api/master/user`;
  let body = params;
  console.log(url, 'Update', body);
  return new Promise(resolve => {
    $axios
      .post(url, body)
      .then(result => {
        let res = result.data;
        Toaster({
          message: `${res.message}`,
          type: `${res.error ? 'error' : 'success'} `,
        });
        return resolve(res);
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
        Toaster({
          message: `${res.message}`,
          type: `${res.error ? 'error' : 'success'} `,
        });
        return resolve(res);
      })
      .catch(e => {
        console.log(e);
        Toaster({message: `${e.message}`, type: 'error'});
        return resolve(false);
      });
  });
};
