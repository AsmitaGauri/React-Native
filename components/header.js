import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>My ToDos</Text>
        </View>
    );
}

const styles=StyleSheet.create({
    header:{
        padding:20,
        height:80,
        width:'100%',
        backgroundColor:'green'
    },
    title:{
        color:'#fff',
        fontSize:30,
        textAlign:'center',
        fontWeight:'bold'
    }
});