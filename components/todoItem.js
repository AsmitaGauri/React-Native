import React from 'react';
import {StyleSheet,Text,TouchableOpacity} from 'react-native'

export default function ToDoItem({item,pressHandler}){
    return(
        <TouchableOpacity onPress={()=>pressHandler(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
        
    );
}

const styles=StyleSheet.create({
    item:{
        paddingVertical:20,
        borderColor:'green',
        borderWidth:1,
        marginTop:20,
        paddingHorizontal:25,
    }
});