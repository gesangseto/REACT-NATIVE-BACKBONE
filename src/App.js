import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
// import Spinner from 'react-native-loading-spinner-overlay';
import {Host} from 'react-native-portalize';
import Toast from 'react-native-toast-notifications';
import Icon from 'react-native-vector-icons/Octicons';
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
    <Host>
      <NavigationContainer>
        <Router />
        {/* <Spinner
              visible={true}
              textContent={'Loading...'}
              textStyle={{color: '#FFF'}}
            /> */}
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
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    borderRadius: 5,
    marginHorizontal: 50,
    marginVertical: 5,
    elevation: 10,
  },
});
