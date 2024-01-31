import React from 'react';
import { View, Text, StatusBar, Image, ScrollView, TextInput, SafeAreaView, Button } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HomeScreen({navigation}){
   return(
     <View>

       <Text style={{marginTop:50,marginBottom:30,fontSize:20}}>Welcome to React Native!</Text>
       <Button onPress={()=>navigation.navigate("Login")} title="Login Page"/>
       <Icon name="home" size={30}  />
     </View>
   );
}
