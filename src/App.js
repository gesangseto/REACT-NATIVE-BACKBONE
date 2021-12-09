import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './redux';
import {Host} from 'react-native-portalize';
//
import Router from './router/Router';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Host>
          <NavigationContainer>
            <Router />
          </NavigationContainer>
        </Host>
      </PersistGate>
    </Provider>
  );
};

export default App;
