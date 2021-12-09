import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {Host} from 'react-native-portalize';
import Icon from 'react-native-vector-icons/Octicons';
import Toast from 'react-native-toast-notifications';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './redux';
//
import Router from './router/Router';

const App = () => {
  const handleRenderToast = toastOptions => {
    let color =
      toastOptions.type == 'error'
        ? '#c40001'
        : toastOptions.type == 'success'
        ? '#00b14d'
        : '#ff9800';
    let icon =
      toastOptions.type == 'error'
        ? 'stop'
        : toastOptions.type == 'success'
        ? 'check'
        : 'info';
    return (
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: `${color}`,
            paddingHorizontal: 10,
            justifyContent: 'center',
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            minWidth: '15%',
          }}>
          <Icon
            style={{alignSelf: 'center'}}
            name={`${icon}`}
            color={'white'}
            size={40}
          />
        </View>
        <View
          style={{
            backgroundColor: `${color}`,
            paddingHorizontal: 10,
            justifyContent: 'center',
            backgroundColor: 'white',
            minWidth: '60%',
          }}>
          <Text
            style={{
              color: `${color}`,
              paddingVertical: 5,
              textTransform: 'capitalize',
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            {toastOptions.type}
          </Text>
          <Text style={{color: 'black', paddingBottom: 15}}>
            {toastOptions.message}
          </Text>
        </View>
        <View
          style={{
            borderColor: `${color}`,
            justifyContent: 'center',
            borderWidth: 3,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
          }}
        />
      </View>
    );
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Host>
          <NavigationContainer>
            <Router />
            <Toast
              ref={ref => (global['toast'] = ref)}
              offset={'45%'} // offset for both top and bottom toasts
              duration={2000}
              animationDuration={0}
              placement="bottom"
              animationType="zoom-in"
              renderToast={toastOptions => handleRenderToast(toastOptions)}
            />
          </NavigationContainer>
        </Host>
      </PersistGate>
    </Provider>
  );
};

export default App;
