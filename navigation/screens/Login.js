import React, { Component } from "react";
import { Button, Text, View } from "react-native";

class Login extends Component {
  render() {
    return (
      <View>
        <Text>Login Here</Text>
        <Button onPress={()=>this.props.navigation.navigate("Register")} title="Register"/>
      </View>
    );
  }
}

export default Login;
