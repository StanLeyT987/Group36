import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import SearchResultScreen from '../screens/SearchResult';

const Stack = createStackNavigator();

const ExploreNavigator = props => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={HomeScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="SearchResults"
        component={SearchResultScreen}
        options={{title: 'Search your location'}}
      />
    </Stack.Navigator>
  );
};

export default ExploreNavigator;