import React, { useEffect } from "react";
import { View, Text } from 'react-native'


export default function SplashScreen({ navigation }: { navigation: any }) {

  useEffect(() => {
    setTimeout(() => { navigation.navigate('Login') }, 3000)
  }, []);


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Splash Screen</Text>
    </View>
  );
}