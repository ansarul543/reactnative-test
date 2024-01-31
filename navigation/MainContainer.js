import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ioniccons from "react-native-vector-icons/Ionicons"
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


//Screens
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import DetailsScreen from "./screens/DetailsScreen";

const Tab = createBottomTabNavigator()

export default function MainContainer(){
  return(
    <Tab.Navigator initialRouteName="Home" shifting={true}>
      <Tab.Screen name={"Home"} component={HomeScreen}
                  options={{headerShown:true,
                    tabBarIcon:()=>{return <FontAwesome5 name={'home'} size={20} solid />},
                  }} />
      <Tab.Screen name={"Details"} component={DetailsScreen} options={{headerShown:true,
        tabBarIcon:()=>{return <FontAwesome5 name={'book'} size={20} solid />},
      }} />
      <Tab.Screen name={"Settings"} component={SettingsScreen} options={{headerShown:true,
        tabBarIcon:()=>{return <FontAwesome5 name={'wrench'} size={20} solid />},
      }} />
    </Tab.Navigator>
  );
}
