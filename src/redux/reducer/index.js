import { persistCombineReducers } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import global from './global';
import profile from './profile';
import configApp from './configApp';

const reducer = {
  global: global,
  profile: profile,
  configApp: configApp,
};

const configReduxPersist = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['profile', 'configApp', 'registerDevice'],
};

const reduxPersistReducer = persistCombineReducers(configReduxPersist, reducer);

export default reduxPersistReducer;
