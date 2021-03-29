import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';

// functional component
export default function App() {
  
 const [people,setPeople]=useState([
   {name:"A",id:1},
   {name:"B",id:2},
   {name:'C',id:3},
   {name:"D",id:4},
   {name:"B",id:5},
   {name:'C',id:6},
   {name:"D",id:7},
   {name:"B",id:8},
   {name:'C',id:9},
   {name:"D",id:10},
 ]);
  
  return (
    <View style={styles.container}>
      {/*  in renderItem we need to destructure item*/}
      {/* Here we dont need to specify key its already added */}
      {/* By default it looks for key attribute and adds it as a key, but what if we have some other attribute instead
      like id, which is usually the case with databases, we need to explicitly tell falt list that used this as the key instead */}
{/* One benfit of flat list over scroll view is that whenever we refresh in falt list only the components that are visible are refreshed 
wheereas in scroll view all 100 components if present will be refreshed*/}
      <FlatList
      keyExtractor={(item)=> item.id}
      data={people}
      renderItem={({item})=>(
        <Text style={styles.item}>{item.name}</Text>
      )}
      />
        
    </View>
  );
}

// we create an object with key value pairs
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:10,
    paddingHorizontal:30
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item:{
    padding:20,
    marginTop:30,
    backgroundColor:'pink',
    fontSize:24
  }
});
