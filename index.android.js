/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import App from "./App/Containers/app";

export default class OrientationExample extends Component {
  render() {
    return (
      <View>
        <App />
      </View>
    );
  }
}

AppRegistry.registerComponent('OrientationExample', () => OrientationExample);
