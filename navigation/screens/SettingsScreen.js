import React from 'react';
import { View, Text, Image, ScrollView, TextInput, Button } from "react-native";

export default function SettingsScreen({navigation}){
  return(
    <View>
      <Text style={{marginTop:50,marginBottom:30,fontSize:20}}>Settings Screen</Text>
      <Button onPress={()=>navigation.navigate("Home")} title="Go to Home"/>
    </View>
  );
}
