import React from 'react';
import {View, Text, Image, ScrollView, TextInput,StatusBar } from 'react-native';

export default function DetailsScreen({navigation}){
  return(
    <View>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "white" translucent = {true}/>
      <Text>Details Screen</Text>
      <ScrollView>
        <Text>Some text with me</Text>
        <Text>Welcome Ansarul Mullah</Text>
        <View>
          <Text>Some more text good</Text>
          <Image
            source={{
              uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
            }}
            style={{width: 200, height: 200}}
          />

        </View>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
          }}
          defaultValue="You can type in me"
        />
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
          }}
          defaultValue="You can type in me"
        />




      </ScrollView>
    </View>
  );
}
