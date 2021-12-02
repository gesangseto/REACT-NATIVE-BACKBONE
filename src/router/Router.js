import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import splash_screen from '../screen/splash_screen';
import login from '../screen/login';
import profile from '../screen/profile';
const Stack = createStackNavigator();
const Router = () => {
  return (
    <Stack.Navigator initialRouteName="splash_screen">
      {/* <Stack.Navigator initialRouteName="MainApp"> */}
      <Stack.Screen
        name="splash_screen"
        component={splash_screen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="login"
        component={login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="profile"
        component={profile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default Router;