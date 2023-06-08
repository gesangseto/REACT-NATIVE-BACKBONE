/* eslint-disable prettier/prettier */
import React from 'react';
import Home from './tab_screen/Home';
import Notification from './tab_screen/Notification';
import Scanner from './tab_screen/Scanner';
import IconMat from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';

import {
  AnimatedTabBarNavigator,
  DotSize,
  TabElementDisplayOptions,
} from 'react-native-animated-nav-tab-bar';

// const Tab = createBottomTabNavigator();
const Tab = AnimatedTabBarNavigator();

const MasterHome = ({route, navigation}) => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{headerShown: false}}
        tabBarOptions={{
          activeTintColor: '#2ecc71',
          inactiveTintColor: '#223322',
          activeBackgroundColor: '#2ecc71',
        }}
        appearance={{
          shadow: true,
          floating: true,
          whenActiveShow: TabElementDisplayOptions.ICON_ONLY,
          dotSize: DotSize.SMALL,
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
            tabBarIcon: ({size, focused, color}) => {
              return (
                <IconMat
                  name="home"
                  size={focused ? 30 : 25}
                  color={focused ? 'white' : 'grey'}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Scanner"
          component={Scanner}
          options={{
            title: 'Scanner',
            tabBarIcon: ({size, focused, color}) => {
              if (focused) {
                console.log('Scanner_Screen');
              }
              return (
                <Ionicon
                  name="aperture-sharp"
                  size={focused ? 30 : 25}
                  color={focused ? 'white' : 'grey'}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Notification"
          component={Notification}
          options={{
            title: 'Notification',
            tabBarIcon: ({size, focused, color}) => {
              return (
                <Ionicon
                  name="notifications"
                  size={focused ? 30 : 25}
                  color={focused ? 'white' : 'grey'}
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
