/* eslint-disable prettier/prettier */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from './tab_screen/Home';
import Event from './tab_screen/Event';
import Setting from './tab_screen/Setting';
const Tab = createBottomTabNavigator();

const MasterHome = ({route, navigation}) => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Event" component={Event} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
};

export default React.memo(MasterHome);
