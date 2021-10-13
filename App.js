import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Data from './screens/data';
import Details from'./screens/details';
import {createStackNavigator} from  'react-navigation-stack'
import {createAppContainer} from 'react-navigation'

export default function App() {
  return (
   <AppContainer
   
   />
  );
}

var stackNavigator=createStackNavigator({
  Home:{
    screen:Data,
    navigationOptions:{headerShown:false}
  },
  Details:{
    screen:Details,
    navigationOptions:{headerShown:false}
  }
},
{
  initialRouteName:'Home'
})
const AppContainer=createAppContainer(stackNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
