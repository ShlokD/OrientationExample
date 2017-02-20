import React, { Component } from "react";
import Dimensions from "Dimensions";
import {View, Text } from "react-native";
import { PORTRAIT, LANDSCAPE } from "../Enums/constants";
import baseStyles from "../Styles/base";

export class BaseContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orientation: PORTRAIT
    };
    this._onLayoutChange = this._onLayoutChange.bind(this);
  }

  _onLayoutChange(event) {
    const height = Dimensions.get("window").height;
    const width = Dimensions.get("window").width;
    this.setState({
      orientation: height > width ? PORTRAIT : LANDSCAPE
    });
  }

  render() {
    const message = this.state.orientation === PORTRAIT
    ? "This message is to be displayed in portrait mode"
    : "This message is to be displayed in landscape mode";
    
    const textStyle = this.state.orientation === PORTRAIT
    ? baseStyles.portraitText
    : baseStyles.landscapeText;

    return(
    <View onLayout={this._onLayoutChange}>
      <Text style={textStyle}>{message}</Text>
    </View>);
  }
}

export default BaseContainer;
