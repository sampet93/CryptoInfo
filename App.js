import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Notifications } from 'expo';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';

const drawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen
  },
  Detail: {
    screen: DetailScreen
  }
});

export default createAppContainer(drawerNavigator);