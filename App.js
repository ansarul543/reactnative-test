import React from 'react';
import { View, Text, Image, ScrollView, TextInput, Button, StatusBar } from "react-native";
import MainContainer from "./navigation/MainContainer";
import { NavigationContainer } from "@react-navigation/native";
//import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Login from "./navigation/screens/Login";
import Register from "./navigation/screens/Register";

const Stack = createNativeStackNavigator()
const auth = 1
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={auth==0?"Login":"BottomNavigator"}>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="Register" component={Register} options={{headerBackTitleVisible:true}} />
        <Stack.Screen name="BottomNavigator" component={MainContainer}
                      options={{
                        headerBackTitleVisible:false,headerShown:false,title: 'Dashboard',
                        headerStyle: {
                          backgroundColor: '#f4511e',
                          alignItems:"center"
                        },headerTintColor: '#fff',
                        headerTitleStyle: {
                          fontWeight: 'bold',
                        }
                      }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
