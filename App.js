import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';

// functional component
export default function App() {
  const [name,setName]=useState("asmi");
  const [age,setAge]=useState("30");

  
  return (
    <View style={styles.container}>
        <Text>Enter name</Text>
        <TextInput 
        style={styles.input}
        placeholder="e.g. Asmi" 
        onChangeText={(val)=> setName(val)}/>

        <Text>Enter age</Text>
        <TextInput 
        keyboardType='numeric'
        style={styles.input}
        placeholder="e.g. 10" 
        onChangeText={(val)=> setAge(val)}/>

        {/* Lets you write multiple lines */}
        <TextInput 
        multiline
        style={styles.input}
        placeholder="e.g. Asmi" 
        />
       <Text>name: {name}, age:{age}</Text>
    </View>
  );
}

// we create an object with key value pairs
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    marginTop:20
  },
  input:{
    borderWidth:1,
    padding:8,
    width:200,
    margin:10,
    borderColor:'green'
  }
});
