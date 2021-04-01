import React, { useState } from 'react';
import {StyleSheet,Text,View,TextInput,Button} from 'react-native';

export default function AddToDo({addHandler}){
    const [text,setText]=useState("");
    return(
        <View>
            <TextInput
            style={styles.add}
                placeholder="Enter To Do"
             onChangeText={(val)=>setText(val)}
            />
            <Button title='ADD TODO' color="green" onPress={()=>addHandler(text)}/>
        </View>       
    );
}

const styles=StyleSheet.create({
    add:{
        padding:10,
        borderColor:'#bbb',
        borderWidth:1,
        marginBottom:10,
    }
});