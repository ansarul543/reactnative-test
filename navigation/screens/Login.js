import React, { Component } from "react";
import { Button, StatusBar, Text, View } from "react-native";

class Login extends Component {



  render() {
    return (
      <View>
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "white" translucent = {true}/>
        <Text style={{marginTop:50,marginBottom:30,fontSize:20}}>Login Here</Text>
        <Button onPress={()=>this.props.navigation.navigate("Register")} title="Register"/>
      </View>
    );
  }
}

export default Login;
