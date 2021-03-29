import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

// functional component
export default function App() {
  const [name,setName]=useState("asmi");
  const [person,setPerson]=useState({name:"Asmi",age:"20"});

  const clickHandler=()=>{
    setName('Asmita');
    setPerson({name:"Hehehe",age:"100"});
  }

  return (
    <View style={styles.container}>
        <Text>My name is {name}</Text>
        <Text>His name is {person.name} and his age is {person.age}</Text>
      <View style={styles.button}>
        {/* We cannot style a button therefore we need to add view at the top */}
        {/* We have to add props for button */}
        <Button title="update" onPress={clickHandler}/>
      </View>

      <StatusBar style="auto" />
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
  }
});
