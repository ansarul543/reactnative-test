import React from 'react';
import { View, Text, StatusBar, Image, ScrollView, TextInput, SafeAreaView, Button } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"
import MainContainer from "../MainContainer";

export default function HomeScreen({navigation}){
   return(
     <View>

       <Text >Welcome to React Native!</Text>
       <Button onPress={()=>navigation.navigate("Details")} title="Details"/>

     </View>
   );
}
