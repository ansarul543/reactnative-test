import React, { Component } from "react";
import { View, Text, Button } from "react-native";

class Register extends Component {
  componentDidMount() {
    //this.props.navigation.push("BottomNavigator")
  }
  render() {
    return (
      <View>
        <Text style={{marginTop:50,marginBottom:30,fontSize:20}}>Register Here</Text>
        <Button onPress={()=>this.props.navigation.navigate("BottomNavigator")} title="Dashboard"/>
      </View>
    );
  }
}

export default Register;
