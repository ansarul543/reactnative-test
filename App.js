import React from 'react';
import {View, Text, Image, ScrollView, TextInput,Button} from 'react-native';
import MainContainer from "./navigation/MainContainer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import Login from "./navigation/screens/Login";
import Register from "./navigation/screens/Register";
import HomeScreen from "./navigation/screens/HomeScreen";
import SettingsScreen from "./navigation/screens/SettingsScreen";
import DetailsScreen from "./navigation/screens/DetailsScreen";

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="Register" component={Register} options={{headerShown:false}} />
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="Settings" component={SettingsScreen} options={{headerShown:false}} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{headerShown:false}} />
      </Stack.Navigator>
      {/*<MainContainer/>*/}
    </NavigationContainer>
  );
};


export default App;
