import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Search from '../Screens/SearchScreen';
import Customers from '../Screens/CustomerScreen';
import PostScreen from '../Screens/PostScreen';

import HomeNavigator from './HomeNavigator';
import Register from '../Screens/RegisterScreen';
import LoginScreen from '../Screens/LoginScreen';
import ProfileScreen from '../Screens/ProfileScreen';

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
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Profile" component={ProfileScreen}/>
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
