import axios from "axios";
import { reducer } from "../../../constants";

export const api = (data, tokeApp) => (dispatch) => {
  axios.defaults.headers.common["wms-token"] = tokeApp;
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
