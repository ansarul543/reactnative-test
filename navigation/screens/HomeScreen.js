import React from 'react';
import { View, Text, StatusBar, Image, ScrollView, TextInput, SafeAreaView, Button } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HomeScreen({navigation}){
   return(
     <View>

       <Text >Welcome to React Native!</Text>
       <Button onPress={()=>navigation.navigate("Details")} title="Details"/>
       <Icon name="home" size={30}  />
     </View>
   );
}
