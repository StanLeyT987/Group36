import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Router from './Navigation/Router';
import Home from './Screens/HomeScreen';
import Login from './Screens/LoginScreen';
import Register from './Screens/RegisterScreen';

function App(){
  return (
    <Router />
  
  );
};

export default App;
