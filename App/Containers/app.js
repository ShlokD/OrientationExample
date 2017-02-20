import React, { Component } from "react";
import { View, Text } from "react-native";
import BaseContainer from "./base";
import AppStyles from "../Styles/app";

class App extends Component {
  render() {
    return (
      <View style={AppStyles.appContainer}>
        <BaseContainer />
      </View>
    );
  }
}
export default App;
