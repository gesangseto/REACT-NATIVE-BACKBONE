/* eslint-disable prettier/prettier */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from './tab_screen/Home';
// import Event from './tab_screen/Event';
import Setting from './tab_screen/Setting';
import IconMat from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();

const MasterHome = ({route, navigation}) => {
  return (
    <>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
            tabBarIcon: ({size, focused, color}) => {
              return (
                <IconMat
                  name="home"
                  size={focused ? 35 : 30}
                  color={focused ? 'blue' : 'grey'}
                />
              );
            },
          }}
        />
        {/* <Tab.Screen
        name="Event"
        component={Event}
        options={{
          title: 'Event',
          tabBarIcon: ({size, focused, color}) => {
            if (focused) {
              console.log('Focuse');
            }
            return (
              <IconMat
                name="calendar-today"
                size={focused ? 35 : 30}
                color={focused ? 'blue' : 'grey'}
              />
            );
          },
        }}
      /> */}
        <Tab.Screen
          name="Setting"
          component={Setting}
          options={{
            title: 'Setting',
            tabBarIcon: ({size, focused, color}) => {
              return (
                <IconMat
                  name="app-settings-alt"
                  size={focused ? 35 : 30}
                  color={focused ? 'blue' : 'grey'}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default React.memo(MasterHome);
