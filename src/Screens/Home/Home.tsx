import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Button, TextInput, FlatList, Image } from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { decrement, increment, incrementByAmount, decrementByAmount, nameChange } from "../../store/counterReducer";
import { Scale } from "../../Utilities/Scale";
import { getBooks } from "../../store/booksAction";


export default function HomeScreen({ navigation }: { navigation: any }) {
    useEffect(() => {
        // alert('a')
        setText(testName)
        dispatch(getBooks())
    }, []);

    const [text,setText] = useState<string>('')

    const {books} = useSelector((state: RootState)=>state.books)

    const { value,testName } = useSelector((state: RootState)=> state.counter)
    const dispatch = useDispatch()

    const onPressLogin = () => {
        navigation.navigate('Login')
    }
    const onChangeText = (text:string) => {
        setText(text)
        dispatch(nameChange(text))
    }

    const renderBooks = ({item}:{item:any}) => (
        <View style={{marginTop:50}}>
            <Image style={{height:200,width:200,borderRadius:10}} source={{uri : item.cover}}/>
            <Text>{item.author}</Text>
            <Text>{item.price}</Text>
        </View>
    )

    
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title="Increment" onPress={()=>dispatch(increment())}/>
            <Button title="Increment by 10" onPress={()=>dispatch(incrementByAmount(10))}/>
            <Text style={{fontSize:30}}>{value}</Text>
            {/* <Text style={{fontSize:30}}>{"my name is "+testName}</Text> */}
            <Button title="Decrement by 10" onPress={()=>dispatch(decrementByAmount(10))}/>
            <Button title="Decrement" onPress={()=>dispatch(decrement())}/>
            <TextInput
                style={{height:50,width:100,borderRadius:1,borderColor:'black',borderWidth:1,padding:5}}
                value={text}
                onChangeText={(text)=>onChangeText(text)}
            />
            <Text>{"my name is : "+testName}</Text>
            <FlatList
            data={books}
            renderItem={renderBooks}
            />
            <Text>Home Screen</Text>
            <TouchableOpacity onPress={() => onPressLogin()}>
                <Text>Go To Login</Text>
            </TouchableOpacity>
        </View>
    );
}