import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from 'react-native'


export default function HomeScreen({ navigation }: { navigation: any }) {
    useEffect(() => {
        // alert('a')
    }, []);

    const onPressLogin = () => {
        navigation.navigate('Login')
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <TouchableOpacity onPress={() => onPressLogin()}>
                <Text>Go To Login</Text>
            </TouchableOpacity>
        </View>
    );
}