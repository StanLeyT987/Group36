import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Search from '../screens/SearchScreen';
import Customers from '../screens/CustomerScreen';
import PostScreen from '../screens/PostScreen';

import HomeNavigator from './HomeNavigator';

const Stack = createStackNavigator();

const Router = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Location Search" component={Search} />
        <Stack.Screen name="Guests" component={Customers} />
        <Stack.Screen
          name="Post"
          component={PostScreen}
          options={{title: 'Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
