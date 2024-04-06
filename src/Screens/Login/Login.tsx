import React, { useEffect } from "react";
import { View, Text, Alert, Touchable, TouchableOpacity } from 'react-native'
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";


export default function Login({ navigation }: { navigation: any }) {

  useEffect(() => {
    // alert('a')
  }, []);

  const { testName } = useSelector((state: RootState)=> state.counter)

  const onPressHome = () => {
    navigation.navigate('Home')
  }

  const onPressSignup = () => {
    navigation.navigate('Signup')
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:30}}>{testName}</Text>
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