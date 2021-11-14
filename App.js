import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {
  createBottomTabNavigator,
  createTopTabNavigator,
} from 'react-navigation-tabs';

import RideScreen from './screens/Ride';
import RideHistoryScreen from './screens/RideHistory';

console.reportErrorsAsExceptions = false;

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}} >
        <AppContainer />
      </View>
    );
  }
}

var TabContainer = createBottomTabNavigator({
  Ride: RideScreen,
  Ride History: RideHistoryScreen,
});

const AppContainer = createAppContainer(TabContainer);
