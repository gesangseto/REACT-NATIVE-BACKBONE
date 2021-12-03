/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screen/SplashScreen';
import Login from '../screen/Login';
import MasterHome from '../screen/MasterHome';
const Stack = createStackNavigator();
const Router = () => {
  return (
    <Stack.Navigator initialRouteName="splash_screen">
      {/* <Stack.Navigator initialRouteName="MainApp"> */}
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MasterHome"
        component={MasterHome}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default Router;
