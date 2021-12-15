import $axios from '../Api';
import {Toaster} from '../utils';

export const getSection = async ({params, property}) => {
  let url = `/api/master/user_section?${new URLSearchParams(
    params,
  ).toString()}`;
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
