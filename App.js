import React from 'react';
import { View, Text, Image, ScrollView, TextInput, Button, StatusBar } from "react-native";
import MainContainer from "./navigation/MainContainer";
import { NavigationContainer } from "@react-navigation/native";
//import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';

import Login from "./navigation/screens/Login";
import Register from "./navigation/screens/Register";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./navigation/screens/HomeScreen";
import DetailsScreen from "./navigation/screens/DetailsScreen";
import SettingsScreen from "./navigation/screens/SettingsScreen";

const Drawer = createDrawerNavigator();

const SideBar=()=>{
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Details" component={DetailsScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>

  );
}

const Stack = createNativeStackNavigator()
const auth = 1
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={auth==0?"Login":"BottomNavigator"}
                       screenOptions={{
                         headerTitleAlign:"center",
                         headerStyle: {
                           backgroundColor: 'white',
                         },
                         headerTintColor: 'black',
                         headerTitleStyle: {
                           fontWeight: 'normal',
                         }
                       }}>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="Register" component={Register} options={{headerShown:true,headerBackVisible:true}} />
        <Stack.Screen name="SideBar" component={SideBar}  />
        <Stack.Screen name="BottomNavigator" component={MainContainer}
                      options={{
                        headerBackTitleVisible:false,headerShown:false,title: 'Dashboard',
                      }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
