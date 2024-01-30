import React from 'react';
import { View, Text, StatusBar, Image, ScrollView, TextInput, SafeAreaView, Button } from "react-native";
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';

export default function HomeScreen({navigation}){
   return(
     <View>

       <Text >Welcome to React Native!</Text>
       <Button onPress={()=>navigation.navigate("Details")} title="Details"/>
       <FontAwesome icon={SolidIcons.smile} />
       <FontAwesome icon={RegularIcons.smileWink} />
       <FontAwesome icon={BrandIcons.github} />
     </View>
   );
}
