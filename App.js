import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Notifications } from 'expo';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Detail: DetailScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Top Cryptocurrencies'
    }
});

export default createAppContainer(navigator);