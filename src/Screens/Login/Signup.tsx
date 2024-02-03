import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from 'react-native'


export default function Signup({ navigation }: { navigation: any }) {

  useEffect(() => {
    setTimeout(() => { navigation.navigate('Login') }, 3000)
  }, []);

  const onPressLogin = () => {
    navigation.navigate('Login')
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Signup Screen</Text>
      <TouchableOpacity onPress={() => onPressLogin()}>
        <Text>Go To Login</Text>
      </TouchableOpacity>
    </View>
  );
}