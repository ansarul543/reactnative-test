import React, { Component } from "react";
import { Button, StatusBar, Text, View } from "react-native";

class Login extends Component {
  render() {
    return (
      <View>
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "white" translucent = {true}/>
        <Text>Login Here</Text>
        <Button onPress={()=>this.props.navigation.navigate("Register")} title="Register"/>
      </View>
    );
  }
}

export default Login;
