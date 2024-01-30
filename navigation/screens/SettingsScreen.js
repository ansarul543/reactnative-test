import React from 'react';
import { View, Text, Image, ScrollView, TextInput, Button } from "react-native";

export default function SettingsScreen({navigation}){
  return(
    <View>
      <Text>Settings Screen</Text>
      <Button onPress={()=>navigation.navigate("Home")} title="Go to Home"/>
    </View>
  );
}
