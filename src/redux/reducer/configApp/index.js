import { reducer } from '../../../constants';

const initialStateRoot = {
  configApp: {},
  registerDevice: null,
};

const configApp = (state = initialStateRoot, action) => {
  switch (action.type) {
    case reducer.CONFIGAPP:
      return {
        ...state,
        configApp: action.value,
      };
    case reducer.REGISTERDEVICE:
      return {
        ...state,
        registerDevice: action.value,
      };
    default:
      return state;
  }
};

export default configApp;
