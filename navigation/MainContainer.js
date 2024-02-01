import React from 'react';
import { Image, View, Button, TouchableOpacity, Alert } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ioniccons from "react-native-vector-icons/Ionicons"
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


//Screens
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import DetailsScreen from "./screens/DetailsScreen";

const Tab = createBottomTabNavigator()

function LogoTitle() {
  return (
    <View style={{display:"flex",flex:1,flexDirection:"column"}}>
      <Image
        style={{ width: 50,
          height: 30,
          display: 'flex',
          flex:1,
          alignItems: 'center',
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
                      <TouchableOpacity>
                      <FontAwesome5 name={'user'} onPress={()=>navigation.navigate("Login")}
                                    color="black" style={{paddingRight:15}} size={25} solid />
                      </TouchableOpacity>
                    ),
                    headerLeft: () => (
                      <TouchableOpacity>
                        <FontAwesome5 name={'bars'} onPress={()=>alert("Left Menu")}
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
