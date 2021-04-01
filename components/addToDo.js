import React, { useState } from 'react';
import {StyleSheet,Text,View,TextInput,Button} from 'react-native';

export default function AddToDo({addHandler}){
    const [text,setText]=useState("");

    const addHandlerUtil=()=>{
        addHandler(text);
        setText("");
    }

    return(
        <View>
            <TextInput
            style={styles.add}
                placeholder="Enter To Do"
             onChangeText={(val)=>setText(val)}
             value={text}
            />
            <Button title='ADD TODO' color="green" onPress={addHandlerUtil}/>
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