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
                  options={{headerShown:false,
                    tabBarIcon:()=>{return <FontAwesome5 name={'comments'} solid />},
                  }} />
      <Tab.Screen name={"Details"} component={DetailsScreen} options={{headerShown:false}} />
      <Tab.Screen name={"Settings"} component={SettingsScreen} options={{headerShown:false}} />
    </Tab.Navigator>
  );
}
