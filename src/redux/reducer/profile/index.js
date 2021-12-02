import { reducer } from '../../../constants';

const initialStateRoot = {
  profile: {},
  tokenApps: '',
  roleMenu: [],
};

const profile = (state = initialStateRoot, action) => {
  switch (action.type) {
    case reducer.PROFILE:
      return {
        ...state,
        profile: action.value,
      };
    case reducer.TOKEN:
      return {
        ...state,
        tokenApps: action.value,
      };
    case reducer.MENU:
      return {
        ...state,
        roleMenu: action.value,
      };
    default:
      return state;
  }
};

export default profile;
