import { reducer } from "../../../constants";

const initialStateRoot = {
  loading: false,
  refresh: false,
  countTimeOut: 900,
};

const global = (state = initialStateRoot, action) => {
  switch (action.type) {
    case reducer.LOADING:
      return {
        ...state,
        loading: action.value,
      };
    case reducer.REFRESH:
      return {
        ...state,
        refresh: action.value,
      };
    case reducer.COUNTTIMEOUT:
      return {
        ...state,
        countTimeOut: action.value,
      };
    default:
      return state;
  }
};

export default global;
