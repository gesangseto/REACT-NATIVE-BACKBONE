/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screen/SplashScreen';
import Login from '../screen/Login';
import MasterHome from '../screen/MasterHome';
import {User, FormUser} from '../screen/administrator/user';
import {Department, FormDepartment} from '../screen/administrator/department';
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
      {/* Administrator */}
      <Stack.Screen
        name="/administrator/user"
        component={User}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="/administrator/user/form"
        component={FormUser}
        options={{headerShown: false}}
      />
      {/* Department */}
      <Stack.Screen
        name="/administrator/department"
        component={Department}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="/administrator/department/form"
        component={FormDepartment}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default Router;
