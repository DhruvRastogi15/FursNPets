import React, { useEffect } from "react";
import { View, Text, Alert, Touchable, TouchableOpacity } from 'react-native'


export default function Login({ navigation }: { navigation: any }) {

  useEffect(() => {
    // alert('a')
  }, []);

  const onPressHome = () => {
    navigation.navigate('Home')
  }

  const onPressSignup = () => {
    navigation.navigate('Signup')
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
      <TouchableOpacity onPress={()=>onPressHome()}>
        <Text>Go To Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>onPressSignup()}>
        <Text>Go To Signup</Text>
      </TouchableOpacity>
    </View>
  );
}