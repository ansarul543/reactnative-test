import React, { Component } from "react";
import { View, Text, Button } from "react-native";

class Register extends Component {
  render() {
    return (
      <View>
        <Text>Register Here</Text>
        <Button onPress={()=>this.props.navigation.navigate("BottomNavigator")} title="Home"/>
      </View>
    );
  }
}

export default Register;
