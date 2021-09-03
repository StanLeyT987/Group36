import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ExploreNavigator from './ExploreNavigator';
import ProfileNavigator from './ProfileNavigator';

import Fontisto from 'react-native-vector-icons/Fontisto';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = props => {
  return (
    <Tab.Navigator tabBarOptions={{activeTintColor: '#f15454'}}>
      <Tab.Screen
        name="Explore"
        component={ExploreNavigator}
        options={{
          tabBarIcon: ({color: string}) => (
            <Fontisto name="search" size={25} color={'#f15454'} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: () => (
            <EvilIcons name="user" size={25} color={'#f15454'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
