import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons"


//Screens
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import DetailsScreen from "./screens/DetailsScreen";
const Tab = createBottomTabNavigator()

export default function MainContainer(){
  return(
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name={"Home"} component={HomeScreen}
      />
      <Tab.Screen name={"Details"} component={DetailsScreen} />
      <Tab.Screen name={"Settings"} component={SettingsScreen} />
    </Tab.Navigator>
  );
}