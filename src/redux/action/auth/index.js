import axios from "axios";
import { reducer } from "../../../constants";


export const loginApi = (data) => (dispatch) => {
  axios.defaults.headers.common["wms-token"] =
    "dc19db99-df5f-4dda-a874-6efec78615561";
  axios.defaults.timeout = 5000;
  return new Promise((resolve) => {
    dispatch({ type: reducer.REFRESH, value: true });
    axios
      .post("http://103.102.153.214:8010/api/general", data)
      .then((result) => {
        dispatch({ type: reducer.REFRESH, value: false });
        resolve(result.data);
      })
      .catch((e) => {
        dispatch({ type: reducer.REFRESH, value: false });
      });
  });
};
