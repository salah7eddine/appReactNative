import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import About from '../screens/about';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';
import React from 'react';

const screens = {
  About: {
    screen: About,
    navigationOptions: {
      headerTitle: () => <Header title='About GameZone' />,
      // title: 'About GameZone',
      // headerStyle: { backgroundColor: '#333' },
    },
  },
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  },
});

export default AboutStack;
