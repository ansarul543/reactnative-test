import React from 'react';
import { Image, View, Button, TouchableOpacity, Alert } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ioniccons from "react-native-vector-icons/Ionicons"
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {  DrawerActions } from '@react-navigation/native';


//Screens
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import DetailsScreen from "./screens/DetailsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Tab = createBottomTabNavigator()

function LogoTitle() {
  return (
    <View style={{display:"flex",flex:1,flexDirection:"column"}}>
      <Image
        style={{ width: 50,
          height: 20,
          display: 'none',
          flex:1,
          //alignItems: 'center',
          backgroundColor: '#fff',
          }}
        source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}
      />
    </View>
  );
};

export default function MainContainer({navigation}){
  return(
    <Tab.Navigator initialRouteName="Home"
                   screenOptions={({ route }) => ({
                     tabBarActiveTintColor: "black",
                     tabBarInactiveTintColor: "#555",
                     tabBarStyle:{
                       height:60,
                       backgroundColor:"#f8f8f8",
                       paddingTop:5
                     },
                     tabBarLabelStyle: {
                       fontSize: 16,
                       paddingBottom:5,
                       fontWeight:"normal"
                     },
                     headerStyle: {
                       height: 80,
                       backgroundColor: 'white',
                     },
                     headerTintColor: 'black',
                     headerTitleStyle: {
                       fontWeight: 'bold',
                     },
                     headerTitleAlign:"center"


                     })}
    >
      <Tab.Screen name={"Home"} component={HomeScreen}
                  options={{headerShown:true,
                    headerTitle: (props) => <LogoTitle {...props} />,
                    tabBarIcon:()=>{return <FontAwesome5 name={'home'}  size={20} solid />},
                    headerRight: () => (
                      <View  style={{flex:4,flexDirection:"row",paddingTop:25}}>
                        <TouchableOpacity>
                          <FontAwesome5 name={'arrow-left'} onPress={()=>Alert.alert('Are you suse', 'Please Choose Action',
                            [
                            {
                              text: 'Ask me later',
                              onPress: () => console.log('Ask me later pressed'),
                            },
                            {
                              text: 'Cancel',
                              onPress: () => console.log('Cancel Pressed'),
                              style: 'cancel',
                            },
                            {text: 'OK', onPress: () => console.log('OK Pressed')},
                          ])}
                                        style={{paddingRight:30}} size={25} solid />
                        </TouchableOpacity>

                        <TouchableOpacity>
                          <FontAwesome5 name={'home'} onPress={()=>alert("Search")}
                                        style={{paddingRight:25}} size={25} solid />
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <FontAwesome5 name={'wrench'} onPress={()=>alert("Search")}
                                        style={{paddingRight:25}} size={25} solid />
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <FontAwesome5 name={'search'} onPress={()=>alert("Search")}
                                         style={{paddingRight:15}} size={25} solid />
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <FontAwesome5 name={'user'} onPress={()=>navigation.navigate("Login")}
                                        style={{paddingRight:15}} size={25} solid />
                        </TouchableOpacity>
                      </View>
                    ),
                    headerLeft: () => (
                        <TouchableOpacity>
                          <FontAwesome5 name={'bars'} onPress={()=>alert("Search")}
                                        color="black" style={{paddingLeft:15}} size={25}  />
                        </TouchableOpacity>
                    ),
                  }} />
      <Tab.Screen name={"Details"} component={DetailsScreen} options={{headerShown:true,
        tabBarIcon:()=>{return <FontAwesome5 name={'book'} size={20} solid />}
      }} />
      <Tab.Screen name={"Settings"} component={SettingsScreen} options={{headerShown:true,
        tabBarIcon:()=>{return <FontAwesome5 name={'wrench'} size={20} solid />}
      }} />
    </Tab.Navigator>
  );
}
